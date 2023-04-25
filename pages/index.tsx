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

  const handleGenreSelect = (e) => {
    setInputGenre(e.target.value);
  };

  const handleYearSelect = (e) => {
    setInputYear(e.target.value);
  };

  const handleTypeSelect = (e) => {
    setInputType(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("send form with this info: ", {
      genre: inputGenre,
      year: inputYear,
      type: inputType,
    });
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-start">
        <img className="w-48 h-48" src="logo.png" alt="Workflow" />
        <div className=" flex flex-row justify-around w-full h-full">
          <div className=" flex flex-col">
            <form onSubmit={handleForm}>
              <fieldset className="flex flex-wrap gap-3 mb-4">
                <legend className="sr-only">Genre</legend>

                <div>
                  <input
                    type="radio"
                    name="ColorOption"
                    value="HipHop"
                    id="ColorBlack"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleGenreSelect}
                  />

                  <label
                    htmlFor="ColorBlack"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >
                    <svg
                      className="hidden h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">Hip Hop</p>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="ColorOption"
                    value="Pop"
                    id="ColorRed"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleGenreSelect}
                  />

                  <label
                    htmlFor="ColorRed"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >
                    <svg
                      className="hidden h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">Pop</p>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="ColorOption"
                    value="RnB"
                    id="ColorBlue"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleGenreSelect}
                  />

                  <label
                    htmlFor="ColorBlue"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >
                    <svg
                      className="hidden h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">R&B</p>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="ColorOption"
                    value="country"
                    id="ColorGold"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleGenreSelect}
                  />

                  <label
                    htmlFor="ColorGold"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >
                    <svg
                      className="hidden h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">Country</p>
                  </label>
                </div>
              </fieldset>

              <fieldset className="flex flex-wrap gap-3 mb-4">
                <legend className="sr-only">Year</legend>

                <div>
                  <input
                    type="radio"
                    name="YearOption"
                    value="2020"
                    id="ColorBlack"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleYearSelect}
                  />

                  <label
                    htmlFor="ColorBlack"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >
                    <svg
                      className="hidden h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
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
                    id="ColorRed"
                    className="peer hidden [&:checked_+_label_svg]:block"
                    onClick={handleYearSelect}
                  />

                  <label
                    htmlFor="ColorRed"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
                  >
                    <svg
                      className="hidden h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">2017</p>
                  </label>
                </div>
              </fieldset>

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
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
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
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-medium">Chill</p>
                  </label>
                </div>
              </fieldset>
              <button
                type="submit"
                className="inline-block rounded-lg bg-gray-700 px-5 py-3 text-sm font-medium text-white"
              >
                Create
              </button>
            </form>
          </div>
          <div>your playlist</div>
        </div>
      </div>
    </>
  );
}
