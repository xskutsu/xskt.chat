export interface GenerationData {
	id: string;
	total_cost: number;
	created_at: string;
	model: string;
	origin: string;
	usage: number;
	is_byok: boolean;
	upstream_id: string;
	cache_discount?: number;
	app_id?: number;
	streamed?: boolean;
	cancelled?: boolean;
	provider_name?: string;
	latency?: number;
	moderation_latency?: number;
	generation_time?: number;
	finish_reason?: string;
	native_finish_reason?: string;
	tokens_prompt?: number;
	tokens_completion?: number;
	native_tokens_prompt?: number;
	native_tokens_completion?: number;
	native_tokens_reasoning?: number;
	num_media_prompt?: number;
	num_media_completion?: number;
	num_search_results?: number;
}

export interface GenerationResponse {
	data: GenerationData;
}

export async function getGeneration(token: string, id: string): Promise<GenerationResponse | null> {
	try {
		const response = await fetch("https://openrouter.ai/api/v1/generation", {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${token}`
			}
		});
		if (!response.ok) {
			console.error(`Failed to fetch generation ${id}, status:`, response.status);
			return null;
		}
		return await response.json();
	} catch (error) {
		console.error(`Failed to fetch generation ${id}:`, error);
		return null;
	}
}