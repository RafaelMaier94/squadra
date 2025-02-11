import { Leads } from "../types/leads";

export const getLeadsByStatus = async (leadStatus: Leads.Status): Promise<Leads.APIResponse> => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads?status=${leadStatus}`)
    if (!response.ok) throw new Error("Failed to list leads");
    const data = await response.json()
    return data
}


  