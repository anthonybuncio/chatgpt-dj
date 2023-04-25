export default function Input() {
  return (
    <fieldset className="flex flex-wrap gap-3">
      <legend className="sr-only">Color</legend>

      <div>
        <input
          type="radio"
          name="ColorOption"
          value="ColorBlack"
          id="ColorBlack"
          className="peer hidden [&:checked_+_label_svg]:block"
          checked
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
          value="ColorRed"
          id="ColorRed"
          className="peer hidden [&:checked_+_label_svg]:block"
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
          value="ColorBlue"
          id="ColorBlue"
          className="peer hidden [&:checked_+_label_svg]:block"
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
          value="ColorGold"
          id="ColorGold"
          className="peer hidden [&:checked_+_label_svg]:block"
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
  );
}
