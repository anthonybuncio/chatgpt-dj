const AiPlaylist = () => {
  const playlistData = {
    playlist_name: "Hip-Hop Workouts 2017",
    playlist_description:
      "A collection of Hip-Hop tracks released in 2017 to help you get moving 🏃‍♂️",
    playlist_cover_art: "🏃‍♂️",
    songs: [
      {
        artist: "Kendrick Lamar",
        title: "DNA",
      },
      {
        artist: "Cardi B",
        title: "Bodak Yellow",
      },
      {
        artist: "Drake",
        title: "Controlla",
      },
      {
        artist: "21 Savage, Offset & Metro Boomin",
        title: "No Heart",
      },
      {
        artist: "Migos",
        title: "Bad and Boujee",
      },
      {
        artist: "Future",
        title: "Mask Off",
      },
      {
        artist: "SZA",
        title: "Love Galore",
      },
      {
        artist: "Big Sean",
        title: "Bounce Back",
      },
      {
        artist: "Gucci Mane",
        title: "Both",
      },
      {
        artist: "Kanye West",
        title: "Famous",
      },
      {
        artist: "Post Malone ft. Quavo",
        title: "Congratulations",
      },
      {
        artist: "A Boogie Wit da Hoodie",
        title: "Drowning",
      },
      {
        artist: "DJ Khaled ft. Rihanna & Bryson Tiller",
        title: "Wild Thoughts",
      },
      {
        artist: "French Montana ft. Swae Lee",
        title: "Unforgettable",
      },
      {
        artist: "Young Thug & Travis Scott ft. Quavo",
        title: "Pick Up the Phone",
      },
      {
        artist: "Lil Uzi Vert",
        title: "XO Tour Llif3",
      },
      {
        artist: "2 Chainz",
        title: "4 AM",
      },
      {
        artist: "Yo Gotti ft. Nicki Minaj",
        title: "Rake It Up",
      },
      {
        artist: "Playboi Carti",
        title: "Magnolia",
      },
      {
        artist: "J. Cole",
        title: "Deja Vu",
      },
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
    <div className=" w-full max-h-screen m-2">
      <div className="flex w-5/6 shadow-md rounded-lg overflow-hidden mx-auto border-2 border-gray-100">
        <div className="flex flex-col w-full h-screen">
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
