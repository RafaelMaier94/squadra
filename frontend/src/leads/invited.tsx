import React, { useState, useEffect } from "react";
import mapPin from "../assets/Map-pin.svg";
import bagFill from "../assets/bag-fill.svg";
import { BriefcaseIcon } from "../icons/briefcase";
import { PinIcon } from "../icons/pin";

interface Lead {
  id: number;
  firstName: string;
  dateCreated: Date;
  suburb: string;
  category: string;
  description: string;
  price: number;
}

const Invited: React.FC = () => {
  // const [leads, setLeads] = useState<Lead[]>([]);
  const leads: Lead[] = [
    {
      id: 555745,
      firstName: "John",
      dateCreated: new Date('1995-12-17T03:24:00'),
      suburb: "Sydney 2574",
      category: "Electrical",
      description: "Need to install a new light fixture",
      price: 100,
    },
    {
      id: 1144572,
      firstName: "Marco",
      dateCreated: new Date('2020-12-17T03:24:00'),
      suburb: "Melbourne",
      category: "Plumbing",
      description: "Need to fix a leaking tap",
      price: 50,
    },
  ];
  const formatDate = (date: Date) => {
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const day = date.getDate();
    const dateTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const year = date.getFullYear();
    return `${month} ${day} ${year} @ ${dateTime}`;
  }
  const handleAccept = (lead: Lead) => {};

  const handleDecline = (lead: Lead) => {};

  return (
    <div>
      <div className="lead-list font-sans">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-[#F7FFFA] text-[#3A3A3A] mt-8 border-1 border-solid border-gray-200 shadow-sm">
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

              <p>
                {lead.description}
              </p>
            </div>
            <div className="flex items-center gap-4 p-4">
            <button className="bg-[#FF7B12] radius-md text-[#F7FFFA] border-b-3 border-solid border-[#D26510] hover:!border-[#ad7054]" onClick={() => handleAccept(lead)}>Accept</button>
            <button className="radius-md bg-[#EEEEEE] text-[#3A3A3A] border-b-3 border-solid border-gray-400 hover:!border-gray-500" onClick={() => handleDecline(lead)}>Decline</button>
            <p>
              <strong className="mr-1">${lead.price.toFixed(2)}</strong>Lead invitation
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invited;
