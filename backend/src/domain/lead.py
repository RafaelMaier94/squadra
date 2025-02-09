class Lead:
    def __init__(
        self,
        id,
        first_name,
        date_created,
        suburb,
        category,
        description,
        price,
        status="new",
        contact_full_name=None,
        contact_phone_number=None,
        contact_email=None,
    ):
        self.id = id
        self.first_name = first_name
        self.date_created = date_created
        self.suburb = suburb
        self.category = category
        self.description = description
        self.price = price
        self.status = status
        self.contact_full_name = contact_full_name
        self.contact_phone_number = contact_phone_number
        self.contact_email = contact_email

    @classmethod
    def create(
        self, id, first_name, date_created, suburb, category, description, price
    ):
        return Lead(
            id,
            first_name,
            date_created,
            suburb,
            category,
            description,
            price,
            status="new",
        )

    @classmethod
    def restore(
        self,
        id,
        first_name,
        date_created,
        suburb,
        category,
        description,
        price,
        status,
        contact_full_name=None,
        contact_phone_number=None,
        contact_email=None,
    ):
        return Lead(
            id,
            first_name,
            date_created,
            suburb,
            category,
            description,
            price,
            status,
            contact_full_name,
            contact_phone_number,
            contact_email,
        )

    def accept(self):
        self.status = "accepted"
        if self.price > 500:
            self.price = self.price * 0.9

    def reject(self):
        self.status = "rejected"
