from sqlalchemy.orm import Session
from src.infra.models.lead import LeadModel

def list_leads_by_status(db: Session, status: str):
    output = db.query(LeadModel).filter(LeadModel.status == status).all()
    return [lead.as_dict() for lead in output]