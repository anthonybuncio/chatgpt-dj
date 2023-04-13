import AiPlaylist from "@/components/AiPlaylist";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import SavedPlaylists from "@/components/SavedPlaylists";
import { useState } from "react";

export default function Generator() {
  const [songOne, setSongOne] = useState("");
  const [songTwo, setSongTwo] = useState("");
  const [songThree, setSongThree] = useState("");
  const [songFour, setSongFour] = useState("");
  const [songFive, setSongFive] = useState("");

  const [aiResponse, setAiResponse] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Format the data before sending to chatGPT
    console.log(songOne, songTwo, songThree);

    if (songOne !== "") {
      const input = `I want you to act as a song recommender. I will provide you with a song and you will create a playlist of 10 songs that are similar to the given song. And you will provide a playlist name and description for the playlist. Do not choose songs that are same name or artist. Do not write any explanations or other words, just reply in JSON format with the playlist name, description and the songs. My song is "${songOne}".`;

      await processMessage(input);
    }
  };

  const processMessage = async (formPrompt: string) => {
    const data = await fetch("/api/create-playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: formPrompt,
      }),
    }).then((response) => response.json());

    if (data.text) {
      const dataObj = JSON.parse(data.text);
      console.log("return data", dataObj);
      setAiResponse(dataObj);
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-row items-start justify-start">
        <div>
          <Menu />
        </div>
        <div className="w-full">
          <Nav />
          <div className="flex min-h-screen flex-row items-start justify-between">
            <form
              id="login"
              onSubmit={handleSubmit}
              className="border border-indigo-600 w-1/5"
            >
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex md:flex-col flex-col items-center py-8 px-4">
                  {/* Code block starts */}
                  <div className="flex flex-col md:mb-8">
                    <label
                      htmlFor="email1"
                      className="text-gray-800 dark:text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                    >
                      Song #1
                    </label>
                    <div className="relative">
                      <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-red-500 dark:bg-indigo-600 rounded-l cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon icon-tabler icon-tabler-mail"
                          width={18}
                          height={18}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                          />
                        </svg>
                      </div>
                      <input
                        id="song1"
                        className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                        placeholder="Placeholder"
                        onChange={(event) => setSongOne(event.target.value)}
                      />
                    </div>
                  </div>
                  {/* Code block ends */}
                  {/* Code block starts */}
                  <div className="flex flex-col md:mb-8 md:py-0 py-4">
                    <label
                      htmlFor="email2"
                      className="text-gray-800 dark:text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                    >
                      Song #2
                    </label>
                    <div className="relative">
                      <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-red-500 dark:bg-indigo-600 rounded-l cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon icon-tabler icon-tabler-mail"
                          width={18}
                          height={18}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                          />
                        </svg>
                      </div>
                      <input
                        id="song2"
                        className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                        placeholder="Placeholder"
                        onChange={(event) => setSongTwo(event.target.value)}
                      />
                    </div>
                  </div>
                  {/* Code block ends */}
                  {/* Code block starts */}
                  <div className="flex flex-col md:mb-8 md:py-0 py-4">
                    <label
                      htmlFor="email3"
                      className="text-gray-800 dark:text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                    >
                      Song #3
                    </label>
                    <div className="relative">
                      <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-red-500 dark:bg-indigo-600 rounded-l cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon icon-tabler icon-tabler-mail"
                          width={18}
                          height={18}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                          />
                        </svg>
                      </div>
                      <input
                        id="song3"
                        className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                        placeholder="Placeholder"
                        onChange={(event) => setSongThree(event.target.value)}
                      />
                    </div>
                  </div>
                  {/* Code block ends */}
                  {/* Code block starts */}
                  <div className="flex flex-col md:mb-8 md:py-0 py-4">
                    <label
                      htmlFor="email4"
                      className="text-gray-800 dark:text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                    >
                      Song #4
                    </label>
                    <div className="relative">
                      <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-red-500 dark:bg-indigo-600 rounded-l cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon icon-tabler icon-tabler-mail"
                          width={18}
                          height={18}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                          />
                        </svg>
                      </div>
                      <input
                        id="song4"
                        className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                        placeholder="Placeholder"
                        onChange={(event) => setSongFour(event.target.value)}
                      />
                    </div>
                  </div>
                  {/* Code block ends */}
                  {/* Code block starts */}
                  <div className="flex flex-col md:mb-8 md:py-0 py-4">
                    <label
                      htmlFor="email5"
                      className="text-gray-800 dark:text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                    >
                      Song #5
                    </label>
                    <div className="relative">
                      <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-red-500 dark:bg-indigo-600 rounded-l cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon icon-tabler icon-tabler-mail"
                          width={18}
                          height={18}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                          />
                        </svg>
                      </div>
                      <input
                        id="song5"
                        className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                        placeholder="Placeholder"
                        onChange={(event) => setSongFive(event.target.value)}
                      />
                    </div>
                  </div>
                  {/* Code block ends */}
                </div>
                <div className="flex flex-col md:py-0 py-4">
                  <div className="">
                    <button
                      // className="bg-red-500 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
                      className="bg-red-500 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm font-normal flex items-center"
                      type="submit"
                    >
                      Create AI Playlist
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <AiPlaylist />
            <SavedPlaylists />
          </div>
        </div>
      </main>
    </>
  );
}
