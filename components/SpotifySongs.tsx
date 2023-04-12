import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import ArtistButton from "./ArtistButton";

const SpotifySongs = () => {
  const { data: songs } = useSWR("/api/stats/top-tracks", fetcher);

  console.log("front end data", songs);
  let defaultTransform = 0;
  function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("song-slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
      defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
  }

  function goPrev() {
    var slider = document.getElementById("song-slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
  }

  return (
    <section>
      <div className="container py-4 mx-auto">
        <div className="text-lg font-bold dark:text-gray-900">
          <h1>Most Played Songs</h1>
        </div>

        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
          <div className="w-full relative flex items-center justify-center">
            <button
              aria-label="slide backward"
              // className="absolute ml-10 z-30 left-0 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              className="mr-8 z-30 left-0 focus:outline-none cursor-pointer"
              id="prev"
              onClick={goPrev}
            >
              <svg
                className="dark:text-gray-900"
                width="12"
                height="20"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <div
                id="song-slider"
                className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              >
                {songs &&
                  songs.map((song, index: number) => (
                    <ArtistButton
                      key={index}
                      id={index}
                      artist={song.artist!}
                      coverImage={song.coverImage.url}
                      title={song.title}
                    />
                  ))}
              </div>
            </div>
            <button
              aria-label="slide forward"
              // className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              className=" z-30 right-0 ml-8 focus:outline-none cursor-pointer"
              id="next"
              onClick={goNext}
            >
              <svg
                className="dark:text-gray-900"
                width="12"
                height="20"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySongs;
