const AiPlaylist = ({ playlistData }) => {
  console.log("Playlist to render: ", playlistData);
  function trackData(song, i) {
    return (
      <div
        key={i}
        className="flex flex-col border-b border-gray-200 p-2 w-full hover:shadow-md cursor-pointer"
      >
        <span className="text-sm text-black capitalize font-semibold pt-1">
          {i + 1}. {song.title} -{" "}
          <span className="text-xs text-gray-500 uppercase font-medium ">
            {song.artist}
          </span>
        </span>
      </div>
    );
  }
  return (
    <div className=" w-full max-h-screen m-2">
      <div className="flex w-2/3 shadow-md rounded-lg overflow-hidden mx-auto border-2 border-gray-100">
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
              <span className="text-xs text-gray-900 uppercase font-medium">
                {playlistData.playlist_description}
              </span>
            </div>
          </div>

          <div className="flex flex-col p-4 overflow-y-auto">
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
