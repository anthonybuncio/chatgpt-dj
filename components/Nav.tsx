import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const Nav = () => {
  const { data: userData } = useSWR("/api/user", fetcher);

  return (
    <nav x-data="{ isOpen: false }" className="relative shadow">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="relative mt-4 md:mt-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Search"
              />
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                // x-cloak
                // @click="isOpen = !isOpen"
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            // x-cloak
            // :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
            className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
          >
            <div className="flex items-center mt-4 lg:mt-0">
              {userData && (
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src={userData.data.images[0].url}
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2 text-gray-700 dark:text-gray-500">
                    {userData.data.display_name}
                  </h3>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
