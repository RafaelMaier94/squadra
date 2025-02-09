from src.domain.lead import Lead


def test_accept_lead_with_price_above_500():
    lead = Lead(id=1, first_name="John", date_created="2023-10-01", suburb="Suburb", category="Category", description="Description", price=600)
    lead.accept()
    assert lead.status == 'accepted'
    assert lead.price == 540  # 600 * 0.9

def test_accept_lead_with_price_below_500():
    lead = Lead(id=2, first_name="Jane", date_created="2023-10-01", suburb="Suburb", category="Category", description="Description", price=400)
    lead.accept()
    assert lead.status == 'accepted'
    assert lead.price == 400

def test_reject_lead():
    lead = Lead(id=3, first_name="Doe", date_created="2023-10-01", suburb="Suburb", category="Category", description="Description", price=300)
    lead.reject()
    assert lead.status == 'rejected'

