import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const Menu = () => {
  const [active, setActive] = useState("");
  const router = useRouter();

  const { data: user } = useSWR("/api/user", fetcher);

  console.log("navigation component user data:", user);
  console.log(router);
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-spotify w-auto h-auto text-[#1ED760]"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"></path>
          <path d="M9 15c1.5 -1 4 -1 5 .5"></path>
          <path d="M7 9c2 -1 6 -2 10 .5"></path>
        </svg>
      </Link>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="relative mx-3">
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
              className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              play ai
            </label>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/generator"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wand w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 21l15 -15l-3 -3l-15 15l3 3"></path>
                <path d="M15 6l3 3"></path>
                <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
              </svg>

              <span className="mx-2 text-sm font-medium">Generator</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/browse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-list-search w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M18.5 18.5l2.5 2.5"></path>
                <path d="M4 6h16"></path>
                <path d="M4 12h4"></path>
                <path d="M4 18h4"></path>
              </svg>

              <span className="mx-2 text-sm font-medium">Browse</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="/my-music"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>

              <span className="mx-2 text-sm font-medium">My Music</span>
            </Link>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              Account
            </label>
          </div>
        </nav>
        {user && (
          <a href="#" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-9 w-9"
              src={user?.data?.images[0].url}
              alt="avatar"
            />
            <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
              {user.data.display_name}
            </span>
          </a>
        )}
      </div>
    </aside>
  );
};

export default Menu;
