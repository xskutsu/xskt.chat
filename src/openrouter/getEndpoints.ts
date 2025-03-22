export interface EndpointArchitecture {
	tokenizer?: string;
	instruct_type?: string;
	modality?: string;
}

export interface EndpointPricing {
	request: string;
	image: string;
	prompt: string;
	completion: string;
}

export interface Endpoint {
	name: string;
	context_length: string;
	pricing: EndpointPricing;
	provider_name: string;
	supported_parameters: string[];
	quantization?: string;
	max_completion_tokens?: number;
	max_prompt_tokens?: number;
	status?: string;
}

export interface EndpointsData {
	id: string;
	name: string;
	created: number;
	description: string;
	architecture: EndpointArchitecture;
	endpoints: Endpoint[];
}

export interface EndpointsResponse {
	data: EndpointsData;
}

export async function getEndpoints(author: string, slug: string): Promise<EndpointsResponse | null> {
	try {
		const response = await fetch(`https://openrouter.ai/api/v1/models/${author}/${slug}/endpoints`);
		if (!response.ok) {
			console.error(`Failed to fetch endpoints for ${author}/${slug}, status:`, response.status);
			return null;
		}
		return await response.json();
	} catch (error) {
		console.error(`Failed to fetch endpoints for ${author}/${slug}:`, error);
		return null;
	}
}