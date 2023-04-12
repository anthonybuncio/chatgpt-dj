
import { openai } from '@/lib/chatgpt';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { prompt } = req.body;

	const completion = await openai
		.createCompletion({
			model: "text-davinci-003",
			prompt: prompt,
			temperature: 0.9,
			max_tokens: 1000,
		});

	console.log("backend response", completion.data.choices[0].text);

	const chatgptMessage = completion.data.choices[0].text;

	res.status(200).json({ text: chatgptMessage });
}
