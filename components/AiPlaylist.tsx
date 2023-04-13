const AiPlaylist = () => {
  const playlistData = {
    playlist_name: "Trap Bangers",
    playlist_description:
      "Get ready to turn up the volume with these trap bangers.",
    playlist_cover_art: "🔥",
    songs: [
      { artist: "Juice WRLD", title: "Lucid Dreams" },
      { artist: "DaBaby", title: "Suge" },
      { artist: "Travis Scott", title: "Stargazing" },
      { artist: "Lil Baby", title: "Woah" },
      { artist: "Roddy Ricch", title: "The Box" },
      { artist: "Future", title: "Mask Off" },
      { artist: "Migos", title: "T-Shirt" },
      { artist: "Post Malone", title: "rockstar ft. 21 Savage" },
      { artist: "Cardi B", title: "Bodak Yellow" },
      { artist: "Kendrick Lamar", title: "HUMBLE." },
    ],
  };

  function trackData(song) {
    return (
      // <div className="flex border-b py-3  hover:shadow-md px-2 ">
      //   <div className="flex flex-col px-2 w-full">
      //     <span className="text-sm text-red-500 capitalize font-semibold pt-1">
      //       {song.song_title}
      //     </span>
      //     <span className="text-xs text-gray-500 uppercase font-medium ">
      //       {song.artist}
      //     </span>
      //   </div>
      // </div>
      <div className="flex flex-col border-b p-2 w-full hover:shadow-md cursor-pointer">
        <span className="text-sm text-red-500 capitalize font-semibold pt-1">
          {song.title}
        </span>
        <span className="text-xs text-gray-500 uppercase font-medium ">
          {song.artist}
        </span>
      </div>
    );
  }
  return (
    <div className="w-2/5 max-h-screen p-8 border border-indigo-600">
      <div className="flex w-8/12 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="flex flex-col w-full">
          <div className="flex p-4 border-b">
            <div className="w-20 h-20 text-5xl flex justify-center items-center">
              {playlistData.playlist_cover_art}
            </div>

            <div className="flex flex-col px-2 w-full">
              <span className="text-xs text-gray-700 uppercase font-medium ">
                play ai playlist
              </span>
              <span className="text-sm text-red-500 capitalize font-semibold pt-1">
                {playlistData.playlist_name}
              </span>
              <span className="text-xs text-gray-500 uppercase font-medium">
                {playlistData.playlist_description}
              </span>
            </div>
          </div>

          <div className="flex flex-col p-4">
            {/* <div className="border-b pb-1 flex justify-between items-center mb-2">
              <span className=" text-base font-semibold uppercase text-gray-700">
                playlist
              </span>
              <img
                className="w-4 cursor-pointer"
                src="https://p.kindpng.com/picc/s/152-1529312_filter-ios-filter-icon-png-transparent-png.png"
              />
            </div> */}

            {playlistData.songs.map((song) => trackData(song))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPlaylist;
