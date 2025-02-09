from sqlalchemy import Column, Integer, String, DateTime, Float
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


class LeadModel(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(100), nullable=False)
    date_created = Column(DateTime, nullable=False)
    suburb = Column(String(100), nullable=False)
    category = Column(String(100), nullable=False)
    description = Column(String(1000), nullable=False)
    price = Column(Float, nullable=False)
    status = Column(String(100), nullable=False, default="invited")
    contact_full_name = Column(String(100), nullable=True)
    contact_phone_number = Column(String(100), nullable=True)
    contact_email = Column(String(100), nullable=True)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
