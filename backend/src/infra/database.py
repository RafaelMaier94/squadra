from flask_sqlalchemy import SQLAlchemy
import logging
from sqlalchemy import inspect, text

db = SQLAlchemy()


def init_db(app):
    db.init_app(app)

    with app.app_context():
        # Import all models here to ensure they are registered with SQLAlchemy
        from src.infra.models.lead import LeadModel

        logging.info("Creating all tables...")
        db.create_all()
        logging.info("Tables created successfully.")

        # List all tables in the database
        inspector = inspect(db.engine)
        tables = inspector.get_table_names()
        logging.info(f"Tables in the database: {tables}")

        # Check database connection
        with db.engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            logging.info(f"Database connection check: {result.fetchone()}")
