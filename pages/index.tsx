import Link from "next/link";

export default function Landing({ user }) {
  console.log(user);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <img className="w-48 h-48" src="logo.png" alt="Workflow" />
        {/* <div className="flex flex-row justify-center py-4">
          <span className=" text-4xl">PLAY-i</span>
        </div> */}
        <Link href="/generator">
          <button className="px-8 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-spotify mr-2"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="2"
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
              <span>Continue With Spotify</span>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}
