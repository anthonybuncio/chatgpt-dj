import { useContext, useEffect, useRef, useState } from "react";
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
    const list = songInput.filter((song) => {
      if (song.text === "") return song.id;
    });

    console.log(list);

    if (list.length) {
      updateSong(songString, list[0].id);
    } else if (!list.length || list.length === 0) {
      alert("Playlist is full. Please remove some items to continue.");
    }

    updateSong(songString, list[0].id);
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
      <div className="flex flex-col bg-opacity-30 w-32 h-full py-2 text-left truncate">
        <span className="text-sm font-semibold">{artist}</span>

        {title && (
          <span className="text-xs font-medium text-gray-800 leading-4 lg:leading-5">
            {title}
          </span>
        )}
      </div>
    </div>
  );
};

export default AlbumButton;
