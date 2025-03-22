export interface ModelArchitecture {
	modality: string;
	tokenizer: string;
	instruct_type?: string;
}

export interface ModelTopProvider {
	context_length: number;
	max_completion_tokens: number;
	is_moderated: boolean;
}

export interface ModelPricing {
	prompt: string;
	completion: string;
	image: string;
	request: string;
	input_cache_read: string;
	input_cache_write: string;
	web_search: string;
	internal_reasoning: string;
}

export interface ModelData {
	id: string;
	name: string;
	created: number;
	description: string;
	context_length: number;
	architecture: ModelArchitecture;
	top_provider: ModelTopProvider;
	pricing: ModelPricing;
	per_request_limits: { [key: string]: any };
}

export interface ModelsResponse {
	data: ModelData[];
}

export async function getModels(): Promise<ModelsResponse | null> {
	try {
		const response = await fetch("https://openrouter.ai/api/v1/models");
		if (!response.ok) {
			console.error(`Failed to fetch models, status:`, response.status);
			return null;
		}
		return await response.json();
	} catch (error) {
		console.error(`Failed to fetch models:`, error);
		return null;
	}
}