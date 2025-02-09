from flask import Blueprint, jsonify, request
from src.infra.controllers.accept_lead import AcceptLeadController
from src.infra.controllers.reject_lead import RejectLeadController
from src.view.list_leads_by_status import list_leads_by_status
from src.infra.database import db

# Create a Blueprint
lead_bp = Blueprint("leads", __name__)

# Instantiate the controller
accept_lead_controller = AcceptLeadController()
reject_lead_controller = RejectLeadController()


@lead_bp.route("/leads", methods=["get"])
def list_invited_leads():
    session = db.session
    status = request.args.get("status", "invited")
    new_leads = list_leads_by_status(session, status)
    return {"code": 200, "data": new_leads}


@lead_bp.route("/leads/<int:lead_id>/accept", methods=["patch"])
def accept_lead(lead_id):
    response = accept_lead_controller.handle(lead_id)
    return jsonify(response), response["code"]


@lead_bp.route("/leads/<int:lead_id>/reject", methods=["patch"])
def reject_lead(lead_id):
    response = reject_lead_controller.handle(lead_id)
    return jsonify(response), response["code"]
