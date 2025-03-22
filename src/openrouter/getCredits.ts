export interface CreditsData {
	total_credits: number;
	total_usage: number;
}

export interface CreditsResponse {
	data: CreditsData;
}

export async function getCredits(token: string): Promise<CreditsResponse | null> {
	try {
		const response = await fetch("https://openrouter.ai/api/v1/credits", {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${token}`
			}
		});
		if (!response.ok) {
			console.error("Failed to fetch credits, status:", response.status);
			return null;
		}
		return await response.json();
	} catch (error) {
		console.error("Failed to fetch credits:", error);
		return null;
	}
}