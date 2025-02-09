from src.infra.models.lead import LeadModel
from src.exceptions.exceptions import NotFoundException
from src.domain.lead import Lead
from sqlalchemy.orm import Session


class LeadRepository:
    def __init__(self, session: Session):
        self._session = session

    def get_by_id(self, lead_id):
        lead = self._session.query(LeadModel).filter_by(id=lead_id).first()
        if not lead:
            raise NotFoundException("Lead not found")
        return Lead.restore(**lead.as_dict())

    def update_lead_status(self, lead: Lead):
        lead_found = self._session.query(LeadModel).filter_by(id=lead.id).first()
        if not lead_found:
            raise NotFoundException("Lead not found")
        lead_found.status = lead.status
