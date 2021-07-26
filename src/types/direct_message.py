from dataclasses import dataclass
from datetime import datetime
from typing import Optional

@dataclass()
class Kemono_DM:
    """
    DM item.
    """
    id: str
    user: str
    service: str
    content: str
    added: datetime
    published: datetime
    embed: dict
    file: dict
    import_id: Optional[str]
