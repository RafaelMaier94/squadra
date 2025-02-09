from src.application.repositories.lead_repository import LeadRepository
from src.exceptions.exceptions import NotFoundException


class RejectLead:
    def __init__(self, lead_repository: LeadRepository, session):
        self.lead_repository = lead_repository
        self.session = session

    def execute(self, lead_id):
        try:
            lead = self.lead_repository.get_by_id(lead_id)
            lead.reject()
            self.lead_repository.update_lead_status(lead)
        except NotFoundException as e:
            self.session.rollback()
            raise e
        self.session.commit()
        return lead
