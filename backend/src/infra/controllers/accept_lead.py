from src.application.repositories.lead_repository import LeadRepository
from src.exceptions.exceptions import NotFoundException
from src.infra.database import db
from src.application.use_cases.accept_lead import AcceptLead
from src.infra.services.email import EmailService


def make_accept_lead():
    session = db.session
    repo = LeadRepository(session)
    email_service = EmailService()
    return AcceptLead(repo, session, email_service)


class AcceptLeadController:
    def __init__(self):
        self.use_case = make_accept_lead()

    def handle(self, lead_id):
        try:
            lead = self.use_case.execute(lead_id)
            return {"id": lead.id, "status": lead.status, "code": 200}
        except NotFoundException as e:
            return {"code": 400, "message": str(e)}
