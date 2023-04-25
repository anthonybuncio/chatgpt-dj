import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const playlistPrompt = `I need you to make me a playlist of 20 songs. You will also provide a playlist name, description, and cover art for the playlist.
1. Do not write any explanations or other words, your reply will be in JSON format with the playlist name (playlist_name), description (playlist_description), cover art (playlist_cover_art), and the songs (songs). 
2. The cover art property should be a single emoji icon relating to the playlist or description. 
3. The playlist description should be 100 characters or less.
4. The songs should be an object with artist (artist) and song title (title). 
5. Do not repeat any artists.
I will provide you with an object of preferences that should be used to create the playlist. For example, genre, year, and type of playlist. Here is the object: `;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { prompt, apiKey } = req.body;
	const completePrompt = playlistPrompt + JSON.stringify(prompt);

	const configuration = new Configuration({
		apiKey: apiKey
	});

	if (!apiKey) {
		throw new Error('Please add your OpenAI API key to .env.local');
	}

	const openai = new OpenAIApi(configuration);

	const completion = await openai
		.createCompletion({
			model: "text-davinci-003",
			prompt: completePrompt,
			temperature: 0.9,
			max_tokens: 1000,
		});

	console.log("backend response", completion.data.choices[0].text);

	const chatgptMessage = completion.data.choices[0].text;

	res.status(200).json({ text: chatgptMessage });
}
