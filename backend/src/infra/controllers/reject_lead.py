from src.application.repositories.lead_repository import LeadRepository
from src.exceptions.exceptions import NotFoundException
from src.infra.database import db
from src.application.use_cases.reject_lead import RejectLead


def make_reject_lead():
    session = db.session
    repo = LeadRepository(session)

    return RejectLead(repo, session)


class RejectLeadController:
    def __init__(self):
        self.use_case = make_reject_lead()

    def handle(self, lead_id):
        try:
            lead = self.use_case.execute(lead_id)
            return {"id": lead.id, "status": lead.status, "code": 200}
        except NotFoundException as e:
            return {"code": 400, "message": str(e)}
