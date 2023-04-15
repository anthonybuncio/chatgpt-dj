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

  function trackData(song, i) {
    return (
      <div
        key={i}
        className="flex flex-col border-b border-gray-200 p-2 w-full hover:shadow-md cursor-pointer"
      >
        <span className="text-sm text-black capitalize font-semibold pt-1">
          {i + 1}. {song.title}
        </span>
        <span className="text-xs text-gray-500 uppercase font-medium ">
          {song.artist}
        </span>
      </div>
    );
  }
  return (
    <div className="w-1/3 max-h-screen p-8 ">
      <div className="flex w-5/6 shadow-md rounded-lg overflow-hidden mx-auto border-2 border-gray-100">
        <div className="flex flex-col w-full">
          <div className="flex p-4 border-b border-gray-100">
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

            {playlistData.songs.map((song, i) => trackData(song, i))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPlaylist;
