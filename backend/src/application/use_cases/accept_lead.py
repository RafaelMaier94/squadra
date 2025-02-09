from sqlalchemy.orm import Session
from src.application.repositories.lead_repository import LeadRepository
from src.exceptions.exceptions import NotFoundException
from src.infra.services.email import EmailService


class AcceptLead:
    def __init__(
        self,
        lead_repository: LeadRepository,
        session: Session,
        email_service: EmailService,
    ):
        self.lead_repository = lead_repository
        self.session = session
        self.email_service = email_service

    def execute(self, lead_id):
        try:
            lead = self.lead_repository.get_by_id(lead_id)
            lead.accept()
            self.lead_repository.update_lead_status(lead)
            self.email_service.send_email("vendas@test.com", "Lead accepted")
        except NotFoundException as e:
            self.session.rollback()
            raise e
        self.session.commit()
        return lead
