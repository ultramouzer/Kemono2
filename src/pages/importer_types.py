from typing import Optional, List

class StatusPageProps:
    def __init__(self, 
        current_page: str,
        import_id: str,
        dms: Optional[List[dict]]
    ) -> None:
        self.current_page = current_page
        self.import_id = import_id
        self.dms = dms

class DMPageProps:
    def __init__(self, 
        current_page: str,
        import_id: str,
        dms: Optional[List[dict]]
    ) -> None:
        self.current_page = current_page
        self.import_id = import_id
        self.dms = dms
