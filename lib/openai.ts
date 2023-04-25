import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

if (!process.env.OPENAI_API_KEY) {
	throw new Error('Please add your OpenAI API key to .env.local');
}

export const openai = new OpenAIApi(configuration);