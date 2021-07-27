from dataclasses import dataclass
from datetime import datetime
from typing import Optional

@dataclass()
class __DM:
    id: str
    user: str
    service: str
    content: str
    added: datetime
    published: datetime
    embed: dict
    file: dict
    import_id: Optional[str]

@dataclass()
class __Post:
    id: str
    user: str
    service: str
    added: datetime
    published: datetime
    edited: datetime
    file: dict
    attachments: list[dict]
    title: str
    content: str
    embed: dict
    shared_file: bool
    

@dataclass()
class __User:
    id: str
    name: str
    service: str
    indexed: datetime

@dataclass
class __Account:
    id: str
    username: str
    password: str
    created_at: datetime

@dataclass
class __Favorite_Post:
    id: str
    account_id: str
    service: str
    artist_id: str
    post_id: str

@dataclass
class __Favorite_User:
    id: str
    account_id: str
    service: str
    artist_id: str

@dataclass
class __Request:
    id: str
    service: str
    user: str
    post_id: str
    title: str
    description: str
    created: datetime
    image: str
    price: float
    votes: int
    ips: str
    status: str

@dataclass
class __Log:
    log0: str
    log: list[str]
    created: datetime

class __Kemono:
    def __init__(self) -> None:
        self.DM = __DM
        self.Post = __Post
        self.User = __User
        self.Account = __Account
        self.Request = __Request
        self.Favourite_Post = __Favorite_Post
        self.Favourite_User = __Favorite_User
        self.Log = __Log

# kemono_types = __Kemono()
