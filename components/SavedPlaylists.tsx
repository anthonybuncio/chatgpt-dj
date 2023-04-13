const SavedPlaylists = () => {
  const playlistData = [
    {
      playlist_name: "Trap Vibes",
      playlist_description:
        "A playlist of high-energy trap bangers to get you hyped up and feeling invincible.",
      playlist_cover_art: "🔥",
    },
    {
      playlist_name: "Trap Bangers",
      playlist_description:
        "Get ready to turn up the volume with these trap bangers.",
      playlist_cover_art: "🔥",
    },
    {
      playlist_name: "Night Drive",
      playlist_description:
        "A playlist for driving late at night on empty roads, featuring dark, moody hip hop and R&B tracks with heavy bass and haunting melodies.",
      playlist_cover_art: "🚗",
    },
  ];

  function playlistButton(data, i) {
    return (
      // <div className="w-1/3 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 m-4 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      //   <div className="rounded-[10px] bg-white p-4 !pt-10 sm:p-6">
      //     <h3 className="mt-0.5 text-lg font-medium text-gray-900">
      //       {data.playlist_name}
      //     </h3>

      //     <span className="block text-xs text-gray-500">
      //       {data.playlist_description}
      //     </span>
      //   </div>
      // </div>
      <div
        key={i}
        className="w-1/2 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
      >
        <a className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
          <div className="mt-16 ">
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {data.playlist_name}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {data.playlist_description}
            </p>
          </div>
        </a>
      </div>
    );
  }
  return (
    <div className="w-2/5 max-h-screen p-8 border border-indigo-600">
      <div className="flex w-full  shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="flex flex-col w-full">
          <span className="text-center uppercase text-xl text-black font-medium">
            My Playlists
          </span>
          <div className="flex flex-row flex-wrap w-full justify-center">
            {playlistData.map((data, i) => playlistButton(data, i))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPlaylists;
