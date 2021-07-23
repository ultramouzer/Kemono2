from ..internals.cache.redis import get_conn
from ..internals.database.database import get_cursor
from ..utils.utils import get_value
import ujson
import dateutil
import copy
import datetime

def get_unapproved_dms(import_id: str, reload: bool = False):
    redis = get_conn()
    key = 'unapproved_dms:' + import_id
    dms = redis.get(key)
    if dms is None or reload:
        cursor = get_cursor()
        query = 'SELECT * FROM unapproved_dms WHERE import_id = %s'
        cursor.execute(query, (import_id,))
        dms = cursor.fetchall()
        redis.set(key, serialize_dms(dms), ex = 1)
    else:
        dms = deserialize_dms(dms)
    return dms

def serialize_dms(dms):
    dms = copy.deepcopy(dms)
    return ujson.dumps(list(map(lambda dm: prepare_dm_fields(dm), dms)))

def deserialize_dms(dms_str):
    dms = ujson.loads(dms_str)
    return list(map(lambda dm: rebuild_dm_fields(dm), dms))

def prepare_dm_fields(dm):
    dm['added'] = dm['added'].isoformat()
    dm['published'] = dm['published'].isoformat()
    return dm

def rebuild_dm_fields(dm):
    dm['added'] = dateutil.parser.parse(dm['added'])
    dm['published'] = dateutil.parser.parse(dm['published'])
    return dm
