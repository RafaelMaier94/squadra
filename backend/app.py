from flask import Flask
from flask_cors import CORS
from src.infra.database import init_db, db
from src.infra.routes.lead_routes import lead_bp
from urllib.parse import quote_plus
import logging

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    user = ""
    password = ""
    host = ""
    port = ""
    database = ""
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        f"mssql+pyodbc://{user}:{password}@{host}:{port}/{database}?driver=ODBC+Driver+18+for+SQL+Server&TrustServerCertificate=yes"
    )
    CORS(app)
    logging.basicConfig(level=logging.INFO)
    init_db(app)
    app.register_blueprint(lead_bp)
    logging.getLogger('flask_cors').level = logging.DEBUG

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host="0.0.0.0", port=5000)
