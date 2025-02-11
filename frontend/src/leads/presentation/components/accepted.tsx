import React from "react";
import { PinIcon } from "../../../icons/pin";
import { BriefcaseIcon } from "../../../icons/briefcase";
import { PhoneIcon } from "../../../icons/phone";
import { EmailIcon } from "../../../icons/email";
import { useLeads } from "../../hooks/useLeads";

const Accepted: React.FC = () => {
  const { leads } = useLeads("accepted");

  const formatDate = (date: Date) => {
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const day = date.getDate();
    const dateTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const year = date.getFullYear();
    return `${month} ${day} ${year} @ ${dateTime}`;
  };


  return (
    <div className="font-sans">
        {leads && leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-[#F7FFFA] text-[#3A3A3A] mt-8 border-1 border-solid border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-start gap-4 p-4 w-full border-b-1 border-solid border-gray-200">
              <span className="rounded-full bg-[#FF9F42] w-8 h-8 inline-block text-center leading-8">
                {lead.firstName[0]}
              </span>
              <div>
                <p>{lead.contactFullName}</p>
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
              <p>${lead.price.toFixed(2)} Lead invitation</p>
            </div>
            <div className="flex p-4 gap-6">
                <span className="flex items-center gap-1">
                <PhoneIcon />
                <p className="font-bold text-[#FF9F42]">{lead.contactPhoneNumber}</p>
                </span>
                <span className="flex items-center gap-1">
                <EmailIcon />
                <p className="font-bold text-[#FF9F42]">{lead.contactEmail}</p>
                </span>
            </div>
            <div className="p-4 pt-0 pb-6">
              <p>{lead.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accepted;

