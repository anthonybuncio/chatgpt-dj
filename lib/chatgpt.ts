import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

if (!process.env.OPENAI_API_KEY) {
	throw new Error('Please add your OpenAI API key to .env.local');
}

const openai = new OpenAIApi(configuration);

export const query = async (prompt: string) => {
	const completion = await openai
		.createCompletion({
			model: "text-davinci-003",
			prompt,
			temperature: 0,
			max_tokens: 1000,
		});

	const chatgptMessage = completion.data.choices[0].text;

	return chatgptMessage;
};