from flask import Flask
from flask_cors import CORS
from src.infra.database import init_db, db
from src.infra.routes.lead_routes import lead_bp
from urllib.parse import quote_plus
import logging

password = quote_plus("raF431@2022")


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        f"mssql+pyodbc://sa:{password}@127.0.0.1:1433/leads?driver=ODBC+Driver+18+for+SQL+Server&TrustServerCertificate=yes"
    )
    CORS(app, supports_credentials=True, allow_headers=["Content-Type"], origins=["http://localhost:5173"])
    logging.basicConfig(level=logging.INFO)
    init_db(app)
    app.register_blueprint(lead_bp)
    logging.getLogger('flask_cors').level = logging.DEBUG

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host="0.0.0.0", port=5000)
