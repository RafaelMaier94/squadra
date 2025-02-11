// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Leads {
  export type Status = "invited" | "accepted" | "rejected";
  export type Accepted = {
    id: number;
    firstName: string;
    dateCreated: Date;
    suburb: string;
    category: string;
    description: string;
    price: number;
    contactFullName: string;
    contactPhoneNumber: string;
    contactEmail: string;
  };
  export type APIResponse = {
    code: number;
    data: {
      category: string;
      contact_email: string;
      contact_full_name: string;
      contact_phone_number: string;
      date_created: string;
      description: string;
      first_name: string;
      id: number;
      price: number;
      status: string;
      suburb: string;
    }[];
  };
  export type Invited = {
    id: number;
    firstName: string;
    dateCreated: Date;
    suburb: string;
    category: string;
    description: string;
    price: number;
  };
}
