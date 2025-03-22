import { getModels } from "./openrouter/getModels";

async function test() {
	const models = await getModels();
	if (models) {
		const top = models.data.sort(o => o.context_length)[0];
		console.log("The model with the highest context length is: " + top.name + "!");
	} else {
		console.error("Failed to get models :(");
	}
}

test();