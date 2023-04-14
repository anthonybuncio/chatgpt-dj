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
    {
      playlist_name: "Majestic Mountains",
      playlist_description:
        "Get lost in the beauty of the mountains with these songs",
      playlist_cover_art: "🏔️",
    },
    {
      playlist_name: "Houston's Finest: Get Throwed Edition",
      playlist_description: "All the top tracks from Houston's finest",
      playlist_cover_art: "👑",
    },
    {
      playlist_name: "Bun B Beats",
      playlist_description:
        "A 10 song playlist of tracks similar to Bun B's 'Get Throwed'",
      playlist_cover_art: "🎹",
    },
    {
      playlist_name: "Grindin'",
      playlist_description:
        "A playlist of hard-hitting rap tracks for when you need to grind and hustle.",
      playlist_cover_art: "💪",
    },
    {
      playlist_name: "Club Bangers",
      playlist_description:
        "Get your party started with these high-energy tracks that will keep you dancing all night long.",
      playlist_cover_art: "🎉",
    },
  ];

  function playlistButton(data, i) {
    return (
      <button
        key={i}
        className="relative flex items-start justify-between rounded-xl border border-gray-100 p-2 shadow-xl sm:p-4 lg:px-6 lg:py-4"
      >
        <div className="text-gray-500 text-left">
          <div className="h-8 w-8 sm:h-10 sm:w-10 text-3xl">
            {data.playlist_cover_art}
          </div>

          <h3 className="mt-4 text-md font-light text-gray-900 sm:text-lg">
            {data.playlist_name}
          </h3>

          <p className=" hidden text-xs sm:block">
            {data.playlist_description}
          </p>
        </div>
      </button>
    );
  }
  return (
    <div className="w-1/3 p-8">
      <div className="flex w-full overflow-hidden mx-auto">
        <div className="flex flex-col w-full">
          <span className="text-center uppercase text-xl text-black font-medium">
            My Playlists
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-y-auto">
            {playlistData.map((data, i) => playlistButton(data, i))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPlaylists;
