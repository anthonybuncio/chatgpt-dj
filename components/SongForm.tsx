import { useContext, useEffect, useState } from "react";
import SongContext from "./SongProvider";

const MusicIcon = () => {
  return (
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
  );
};

const SongForm = () => {
  const { songInput, updateSong } = useContext(SongContext);
  const [inputArray, updateInputArray] = useState([]);

  const [aiResponse, setAiResponse] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Format the data before sending to chatGPT

    console.log(inputArray);

    // if (songOne !== "") {
    //   const input = `I want you to act as a song recommender. I will provide you with a song and you will create a playlist of 10 songs that are similar to the given song. And you will provide a playlist name, description, and cover art for the playlist. The cover art property should be a single emoji icon relating to the playlist or description. Do not choose songs that are same name or artist. Do not write any explanations or other words, just reply in JSON format with the playlist name (playlist_name), description (playlist_description), cover art (playlist_cover_art), and the songs (songs). The songs should be an object with artist (artist) and song title (title). The keys in each object should NOT be strings. My first song is "${songOne}".`;

    //   await processMessage(input);
    // }
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

    // if (data.text) {
    //   const dataObj = JSON.parse(data.text);
    //   console.log("return data", dataObj);
    //   setAiResponse(data.text);
    // }
  };

  console.log("song form context", songInput);
  return (
    <div className="w-1/3 max-h-screen py-8 ">
      <div className="flex w-5/6 shadow-md rounded-lg overflow-hidden mx-auto border-2 border-gray-100">
        <div className="flex flex-col w-full items-center justify-center p-4 shadow-md rounded-lg overflow-hidden ">
          <form id="login" onSubmit={handleSubmit}>
            <span className="flex justify-center uppercase text-xl text-black font-medium">
              AI Playlist Generator
            </span>
            <div className="flex md:flex-col flex-col items-center py-8">
              {songInput &&
                songInput.map((input, i) => {
                  return (
                    <div key={i} className="flex flex-col md:mb-8">
                      <label
                        htmlFor={`song${i}`}
                        className="text-gray-800 dark:text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                      >
                        Song #{input.id}
                      </label>
                      <div className="relative">
                        <div
                          onClick={() =>
                            console.log("remove from list", input.id)
                          }
                          className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-red-500 dark:bg-indigo-600 rounded-l cursor-pointer"
                        >
                          <MusicIcon />
                        </div>
                        <input
                          id={`${input.id}`}
                          className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-14 text-md border-gray-300 rounded border shadow"
                          placeholder={`Song #${input.id}`}
                          defaultValue={input.text}
                          onChange={(event) => {
                            console.log(event);
                            const idNumber = parseInt(event.target.id);
                            updateSong(event.target.value, idNumber);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-col py-4">
              <button
                // className="bg-red-500 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
                className="bg-red-500 focus:outline-none transition duration-150 ease-in-out rounded text-white px-8 py-2 text-sm font-normal"
                type="submit"
              >
                Create AI Playlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SongForm;
