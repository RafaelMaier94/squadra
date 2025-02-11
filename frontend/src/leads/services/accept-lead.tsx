export const acceptLead = async (leadId: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/leads/${leadId}/accept`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }
  );
  if (!response.ok) throw new Error("Failed to accept lead");
  return response.json();
};

