import { useContext } from "react";
import SongContext from "../SongProvider";

type ArtistProps = {
  artist: string;
  coverImage: string;
  id: number;
  title?: string;
};

const AlbumButton = ({ artist, coverImage, title }: ArtistProps) => {
  const { songInput, updateSong } = useContext(SongContext);

  const addToStore = (artist, title) => {
    const songString = `${artist} - ${title}`;
    console.log(songString);

    // songInput.map((songData) => {
    //   if (songData.text === "") return songData;
    // });
  };

  return (
    <div
      className="flex flex-shrink-0 flex-col w-full sm:w-auto cursor-pointer text-black dark:text-white"
      onClick={() => {
        addToStore(artist, title);
      }}
    >
      <div className="w-32 h-32">
        <img
          src={coverImage}
          alt={title ?? artist}
          className="object-cover object-center h-full w-full rounded-lg"
        />
      </div>
      <div className="bg-opacity-30 w-32 h-full py-2 text-left truncate">
        <div className="flex">
          <span className="text-sm font-bold leading-5 lg:leading-6">
            {artist}
          </span>
        </div>
        {title && (
          <span className="text-xs leading-4 lg:leading-5">{title}</span>
        )}
      </div>
    </div>
  );
};

export default AlbumButton;
