import React from "react";
import { BriefcaseIcon } from "../../../icons/briefcase";
import { PinIcon } from "../../../icons/pin";
import { useLeads } from "../../hooks/useLeads";
import toast from "react-hot-toast";

const Invited: React.FC = () => {
  const {
    leads,
    acceptNewLead,
    rejectNewLead,
    isAccepting,
    isRejecting,
  } = useLeads("invited");

  const formatDate = (date: Date) => {
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const day = date.getDate();
    const dateTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const year = date.getFullYear();
    return `${month} ${day} ${year} @ ${dateTime}`;
  };
  const handleAccept = (leadId: number) => {
    try {
      acceptNewLead(leadId);
    } catch (e) {
      console.error(e);
      toast.error("Failed to accept lead");
    }
    toast.success("Lead accepted");
  };

  const handleReject = (leadId: number) => {
    try {
      rejectNewLead(leadId);
    } catch (e) {
      console.error(e);
      toast.error(e);
    }
    toast.success("Lead accepted");
  };

  return (
    <div className="font-sans">
      {leads &&
        leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-[#F7FFFA] text-[#3A3A3A] mt-8 border-1 border-solid border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-start gap-4 p-4 w-full border-b-1 border-solid border-gray-200">
              <span className="rounded-full bg-[#FF9F42] w-8 h-8 inline-block text-center leading-8">
                {lead.firstName[0]}
              </span>
              <div>
                <p>{lead.firstName}</p>
                <p>{formatDate(lead.dateCreated)}</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border-b-1 border-solid border-gray-200">
              <span className="flex gap-1">
                <PinIcon />
                <p>{lead.suburb}</p>
              </span>
              <span className="flex gap-1">
                <BriefcaseIcon />
                <p>{lead.category}</p>
              </span>
              <p>Job ID: {lead.id}</p>
            </div>
            <div className="border-b-1 border-solid border-gray-200 p-4">
              <p>{lead.description}</p>
            </div>
            <div className="flex items-center gap-4 p-4">
              <button
                disabled={isAccepting || isRejecting}
                className="bg-[#FF7B12] radius-md text-[#F7FFFA] border-b-3 border-solid border-[#D26510] hover:!border-[#ad7054]"
                onClick={() => handleAccept(lead.id)}
              >
                Accept
              </button>
              <button
                disabled={isAccepting || isRejecting}
                className="radius-md bg-[#EEEEEE] text-[#3A3A3A] border-b-3 border-solid border-gray-400 hover:!border-gray-500"
                onClick={() => handleReject(lead.id)}
              >
                Decline
              </button>
              <p>
                <strong className="mr-1">${lead.price.toFixed(2)}</strong>Lead
                invitation
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Invited;
