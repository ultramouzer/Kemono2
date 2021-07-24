from dataclasses import dataclass
from datetime import datetime

@dataclass()
class Direct_Message:
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

@dataclass()
class Direct_Message_Unapproved(Direct_Message):
    """
    Unapproved DM item.
    """
    import_id: str
