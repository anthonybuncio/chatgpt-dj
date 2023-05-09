import AiPlaylist from "@/components/AiPlaylist";
import Link from "next/link";
import { useState } from "react";

const genres = [
  { name: "Hip-Hop", value: "hiphop" },
  { name: "Pop", value: "pop" },
  { name: "R&B", value: "rnb" },
  { name: "Country", value: "country" },
  { name: "Latin", value: "latin" },
  { name: "Rock", value: "rock" },
  { name: "Indie", value: "indie" },
  { name: "Electronic", value: "electronic" },
  { name: "Jazz", value: "jazz" },
  { name: "Metal", value: "metal" },
];

const years = [
  { name: "2020", value: "2020" },
  { name: "2019", value: "2019" },
  { name: "2018", value: "2018" },
  { name: "2017", value: "2017" },
  { name: "2016", value: "2016" },
  { name: "2015", value: "2015" },
  { name: "2014", value: "2014" },
  { name: "2013", value: "2013" },
];

const types = [
  { name: "Most Popular", value: "popular" },
  { name: "Workout", value: "workout" },
  { name: "Running", value: "running" },
  { name: "Driving", value: "driving" },
  { name: "Chill", value: "chill" },
  { name: "Party", value: "party" },
  { name: "Sleep", value: "sleep" },
  { name: "Focus", value: "focus" },
];

const playlistData = {
  playlist_name: "Hip-Hop Workouts 2017 DEMO",
  playlist_description:
    "A collection of Hip-Hop tracks released in 2017 to help you get moving 🏃‍♂️",
  playlist_cover_art: "🏃‍♂️",
  songs: [
    {
      artist: "Kendrick Lamar",
      title: "DNA",
    },
    {
      artist: "Cardi B",
      title: "Bodak Yellow",
    },
    {
      artist: "Drake",
      title: "Controlla",
    },
    {
      artist: "21 Savage, Offset & Metro Boomin",
      title: "No Heart",
    },
    {
      artist: "Migos",
      title: "Bad and Boujee",
    },
    {
      artist: "Future",
      title: "Mask Off",
    },
    {
      artist: "SZA",
      title: "Love Galore",
    },
    {
      artist: "Big Sean",
      title: "Bounce Back",
    },
    {
      artist: "Gucci Mane",
      title: "Both",
    },
    {
      artist: "Kanye West",
      title: "Famous",
    },
    {
      artist: "Post Malone ft. Quavo",
      title: "Congratulations",
    },
    {
      artist: "A Boogie Wit da Hoodie",
      title: "Drowning",
    },
    {
      artist: "DJ Khaled ft. Rihanna & Bryson Tiller",
      title: "Wild Thoughts",
    },
    {
      artist: "French Montana ft. Swae Lee",
      title: "Unforgettable",
    },
    {
      artist: "Young Thug & Travis Scott ft. Quavo",
      title: "Pick Up the Phone",
    },
    {
      artist: "Lil Uzi Vert",
      title: "XO Tour Llif3",
    },
    {
      artist: "2 Chainz",
      title: "4 AM",
    },
    {
      artist: "Yo Gotti ft. Nicki Minaj",
      title: "Rake It Up",
    },
    {
      artist: "Playboi Carti",
      title: "Magnolia",
    },
    {
      artist: "J. Cole",
      title: "Deja Vu",
    },
  ],
};

export default function Home() {
  const [inputGenre, setInputGenre] = useState(null);
  const [inputYear, setInputYear] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [openAiKey, setOpenAiKey] = useState(null);

  const [gptResponse, setGptResponse] = useState(null);

  const handleGenreSelect = (e) => {
    setInputGenre(e.target.value);
  };

  const handleYearSelect = (e) => {
    setInputYear(e.target.value);
  };

  const handleTypeSelect = (e) => {
    setInputType(e.target.value);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const input = {
      genre: inputGenre,
      year: inputYear,
      type: inputType,
    };
    const key = openAiKey;
    console.log("send form with this info: ", input, key);

    if (
      inputGenre === null ||
      inputYear === null ||
      inputType === null ||
      openAiKey === null
    ) {
      alert("missing input");
    }
    await processMessage(input, key);
  };

  const processMessage = async (formPrompt, userApiKey) => {
    const data = await fetch("/api/create-playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: formPrompt,
        apiKey: userApiKey,
      }),
    }).then((response) => response.json());

    console.log(data);
    if (data.text) {
      const dataObj = JSON.parse(data.text);
      console.log("return data", dataObj);
      setGptResponse(dataObj);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-start ">
        <div className=" flex flex-row w-4/5 h-full justify-center items-center py-2">
          <div className=" h-full m-2 px-4">
            <div className="flex flex-col w-3/4 shadow-md rounded-lg overflow-hidden mx-auto border-2 border-gray-100">
              <img
                className="w-36 h-36 mx-auto"
                src="logo.png"
                alt="Workflow"
              />
              <span className="mb-8 uppercase text-xl font-extrabold text-center">
                Playlist Generator
              </span>
              <div className=" flex flex-row w-full h-full justify-evenly p-8">
                <form onSubmit={handleForm}>
                  <span className="py-2 text-med font-semibold">
                    OpenAI API Key:
                    <span className=" text-purple-500 text-xs px-2 uppercase">
                      <Link href="https://platform.openai.com/signup">
                        Get Yours Here
                      </Link>
                    </span>
                  </span>

                  <div>
                    <input
                      type="text"
                      placeholder="OpenAI API KEY"
                      className="mb-8 flex items-center justify-center gap-2 rounded-md border border-gray-100 p-2 text-gray-900 outline-none w-1/2"
                      onChange={(e) => {
                        setOpenAiKey(e.target.value);
                      }}
                    />
                  </div>

                  <span className="py-2 text-med font-semibold">Genre: </span>
                  <fieldset className="flex flex-wrap gap-3 mb-4">
                    <legend className="sr-only">Genre</legend>

                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="HipHop"
                        id="GenreHipHop"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreHipHop"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Hip Hop</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="Pop"
                        id="GenrePop"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenrePop"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Pop</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="RnB"
                        id="GenreRnB"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreRnB"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">R&B</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="Country"
                        id="GenreCountry"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreCountry"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Country</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="Latin"
                        id="GenreLatin"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreLatin"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Latin</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="Rock"
                        id="GenreRock"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreRock"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Rock</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="Indie"
                        id="GenreIndie"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreIndie"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Indie</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="Electronic"
                        id="GenreElectronic"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreElectronic"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Electronic</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="Jazz"
                        id="GenreJazz"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreJazz"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Jazz</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="GenreOption"
                        value="Metal"
                        id="GenreMetal"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleGenreSelect}
                      />

                      <label
                        htmlFor="GenreMetal"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Metal</p>
                      </label>
                    </div>
                  </fieldset>

                  <span className="py-2 text-med font-semibold">Year: </span>
                  <fieldset className="flex flex-wrap gap-3 mb-4">
                    <legend className="sr-only">Year</legend>

                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2020"
                        id="YearBlack"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="YearBlack"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2020</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2019"
                        id="YearRed"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="YearRed"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2019</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2018"
                        id="YearBlue"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="YearBlue"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2018</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2017"
                        id="YearGold"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="YearGold"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2017</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2016"
                        id="Year2016"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="Year2016"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2016</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2015"
                        id="Year2015"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="Year2015"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2015</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2014"
                        id="Year2014"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="Year2014"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2014</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2013"
                        id="Year2013"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="Year2013"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2013</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="YearOption"
                        value="2012"
                        id="Year2012"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleYearSelect}
                      />

                      <label
                        htmlFor="Year2012"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">2012</p>
                      </label>
                    </div>
                  </fieldset>

                  <span className="py-2 text-med font-semibold">Type: </span>
                  <fieldset className="flex flex-wrap gap-3 mb-4">
                    <legend className="sr-only">Type</legend>

                    <div>
                      <input
                        type="radio"
                        name="TypeOption"
                        value="Popular"
                        id="TypePopular"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleTypeSelect}
                      />

                      <label
                        htmlFor="TypePopular"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Most Popular</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="TypeOption"
                        value="Workout"
                        id="TypeWorkout"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleTypeSelect}
                      />

                      <label
                        htmlFor="TypeWorkout"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Workout</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="TypeOption"
                        value="Running"
                        id="TypeRunning"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleTypeSelect}
                      />

                      <label
                        htmlFor="TypeRunning"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Running</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="TypeOption"
                        value="Driving"
                        id="TypeDriving"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleTypeSelect}
                      />

                      <label
                        htmlFor="TypeDriving"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Driving</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="TypeOption"
                        value="Chill"
                        id="TypeChill"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleTypeSelect}
                      />

                      <label
                        htmlFor="TypeChill"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Chill</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="TypeOption"
                        value="Party"
                        id="TypeParty"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleTypeSelect}
                      />

                      <label
                        htmlFor="TypeParty"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Party</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="TypeOption"
                        value="Sleep"
                        id="TypeSleep"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleTypeSelect}
                      />

                      <label
                        htmlFor="TypeSleep"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Sleep</p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="TypeOption"
                        value="Focus"
                        id="TypeFocus"
                        className="peer hidden [&:checked_+_label_svg]:block"
                        onClick={handleTypeSelect}
                      />

                      <label
                        htmlFor="TypeFocus"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-purple-400 peer-checked:bg-purple-400 peer-checked:text-white"
                      >
                        <svg
                          className="hidden h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className="text-sm font-medium">Focus</p>
                      </label>
                    </div>
                  </fieldset>
                  <button
                    type="submit"
                    className="inline-block rounded-lg bg-purple-500 px-5 py-3 text-sm font-medium text-white mt-8 uppercase"
                  >
                    Create playlist
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center w-1/2">
            <AiPlaylist
              playlistData={gptResponse ? gptResponse : playlistData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
