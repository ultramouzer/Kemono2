from datetime import datetime

class Direct_Message:
    """
    DM item.
    """
    def __init__(self, added: datetime, published: datetime) -> None:
        self.added = added
        self.published = published
