import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getLeadsByStatus } from "../services/get-leads-by-status"
import { acceptLead } from "../services/accept-lead" // Assuming you have this function
import { Leads } from "../types/leads"
import { rejectLead } from "../services/reject-lead";

export const useLeads = (leadStatus: Leads.Status) => {
    const queryClient = useQueryClient();

    const { data: leads, isLoading, isError } = useQuery({
        queryKey: ["leads", leadStatus],
        queryFn: () => getLeadsByStatus(leadStatus).then(formatLeads),
    });

    const { mutate: acceptNewLead, isPending: isAccepting } = useMutation({
        mutationFn: (leadId: number) => acceptLead(leadId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["leads"], exact: false });
        },
    });

    const { mutate: rejectNewLead, isPending: isRejecting } = useMutation({
        mutationFn: (leadId: number) => rejectLead(leadId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["leads"], exact: false });
        },
    });
    const formatLeads = (apiResponse: Leads.APIResponse): Leads.Accepted[] =>
        apiResponse?.data.map((el) => ({
          id: el.id,
          firstName: el.first_name,
          dateCreated: new Date(el.date_created),
          suburb: el.suburb,
          category: el.category,
          description: el.description,
          price: el.price,
          contactFullName: el.contact_full_name || "",
          contactPhoneNumber: el.contact_phone_number || "",
          contactEmail: el.contact_email || "",
    }));

    return {
        leads,
        isLoading,
        isError,
        acceptNewLead,
        isAccepting,
        rejectNewLead,
        isRejecting
    };
};