
import { query } from '@/lib/chatgpt';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	answer: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { prompt } = req.body;

	if (!prompt) {
		res.status(400).json({ answer: "Please provide a prompt!" });
		return;
	}

	const response = await query(prompt);

	const message = {
		text: response
	};

	res.status(200).json({ answer: message.text });
}
