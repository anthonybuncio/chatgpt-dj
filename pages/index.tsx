import AiPlaylist from "@/components/AiPlaylist";
import Link from "next/link";
import { useState } from "react";

const genres = [
  { name: "Hip-Hop", value: "hiphop" },
  { name: "Pop", value: "pop" },
  { name: "R&B", value: "rnb" },
  { name: "Country", value: "country" },
];
export default function Landing() {
  const [inputGenre, setInputGenre] = useState(null);
  const [inputYear, setInputYear] = useState(null);
  const [inputType, setInputType] = useState(null);

  const [gptResponse, setGptResponse] = useState();

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
    console.log("send form with this info: ", input);
    await processMessage(input);
  };

  const processMessage = async (formPrompt) => {
    const data = await fetch("/api/create-playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: formPrompt,
      }),
    }).then((response) => response.json());

    console.log("received response, PRE-PARSE", data);

    if (data.text) {
      const dataObj = JSON.parse(data.text);
      console.log("return data", dataObj);
      setGptResponse(data.text);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-start">
        <img className="w-24 h-24" src="logo.png" alt="Workflow" />
        <div className=" flex flex-row w-full h-full">
          <div className=" flex flex-col items-center w-1/2 h-full">
            <span className="p-4">Playlist Generator</span>
            <form onSubmit={handleForm}>
              <span className="py-2 text-sm font-medium">Genre: </span>
              <fieldset className="flex flex-wrap gap-3 mb-4">
                <legend className="sr-only">Genre</legend>

                <div>
                  <input
                    type="radio"
                    name="GenreOption"
                    value="HipHop"
                    id="GenreBlack"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleGenreSelect}
                  />

                  <label
                    htmlFor="GenreBlack"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    id="GenreRed"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleGenreSelect}
                  />

                  <label
                    htmlFor="GenreRed"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    id="GenreBlue"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleGenreSelect}
                  />

                  <label
                    htmlFor="GenreBlue"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    value="country"
                    id="GenreGold"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleGenreSelect}
                  />

                  <label
                    htmlFor="GenreGold"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
              </fieldset>

              <span className="py-2 text-sm font-medium">Year: </span>
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
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
              </fieldset>

              <span className="py-2 text-sm font-medium">Type: </span>
              <fieldset className="flex flex-wrap gap-3 mb-4">
                <legend className="sr-only">Type</legend>

                <div>
                  <input
                    type="radio"
                    name="TypeOption"
                    value="Workout"
                    id="TypeBlack"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleTypeSelect}
                  />

                  <label
                    htmlFor="TypeBlack"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    id="TypeRed"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleTypeSelect}
                  />

                  <label
                    htmlFor="TypeRed"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    id="TypeBlue"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleTypeSelect}
                  />

                  <label
                    htmlFor="TypeBlue"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
                    id="TypeGold"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleTypeSelect}
                  />

                  <label
                    htmlFor="TypeGold"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
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
              </fieldset>
              <button
                type="submit"
                className="inline-block rounded-lg bg-rose-500 px-5 py-3 text-sm font-medium text-white mt-8 uppercase"
              >
                Create playlist
              </button>
            </form>
          </div>
          <div className=" flex flex-col items-center w-1/2 h-full">
            <AiPlaylist />
          </div>
        </div>
      </div>
    </>
  );
}
