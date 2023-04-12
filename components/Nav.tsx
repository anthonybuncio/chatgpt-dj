import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const Nav = () => {
  const { data: userData } = useSWR("/api/user", fetcher);

  console.log(userData);
  return (
    <nav x-data="{ isOpen: false }" className="relative shadow">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
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
                  <div className="w-8 h-8 overflow-hidden border-2 border-[#1ED760] rounded-full">
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
