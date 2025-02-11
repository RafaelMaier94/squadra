export const rejectLead = async (leadId: number) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads/${leadId}/reject`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (!response.ok) throw new Error("Failed to reject lead");
    return response;
}