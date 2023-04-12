import openai from "./chatgpt";

const query = async (prompt: string) => {
	const res = await openai
		.createCompletion({
			model: "text-davinci-003",
			prompt,
			temperature: 0,
			max_tokens: 1000,
		})
		.then(res => res.data.choices[0].text)
		.catch(err => `ChatGPT was unable to create a playlist (Error: ${err.message})`);

	return res;
};

export default query;