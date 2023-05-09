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
          <span className="text-xs text-gray-600 uppercase font-semibold">
            {song.artist}
          </span>
        </span>
      </div>
    );
  }
  return (
    <div className="w-full h-full m-2 px-4">
      <div className="flex min-w-3/4 max-w-fit shadow-md rounded-lg overflow-hidden mx-auto border-2 border-gray-100">
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center p-2 border-b-2 border-gray-100">
            <div className="w-20 h-20 text-5xl flex justify-center items-center">
              {playlistData.playlist_cover_art}
            </div>

            <div className="flex flex-col px-2 w-full">
              <span className="text-xs text-gray-500 uppercase font-bold ">
                play ai playlist
              </span>
              <span className="text-md text-red-500 capitalize font-semibold pt-1">
                {playlistData.playlist_name}
              </span>
              <span className="text-xs text-gray-900 font-semibold">
                {playlistData.playlist_description}
              </span>
            </div>
          </div>

          <div className="flex flex-col p-4 overflow-y-auto">
            {playlistData.songs?.map((song, i) => trackData(song, i))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPlaylist;
