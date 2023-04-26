import fetcher from "@/lib/fetcher";
import Link from "next/link";
import useSWR from "swr";

const Nav = () => {
  const { data: user } = useSWR("/api/user", fetcher);

  console.log("navigation component user data:", user);
  return (
    <div>
      <nav className="">
        <div className=" mx-12 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link className="flex-shrink-0" href="/">
                <img className="w-14 h-14" src="logo.png" alt="Workflow" />
              </Link>
              <span>
                <Link
                  className="text-black  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
                  href="/"
                >
                  PLAY-i CHATGPT DJ
                </Link>
              </span>

              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4"></div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
