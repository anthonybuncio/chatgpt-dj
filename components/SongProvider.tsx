import { createContext, useState } from "react";

interface Song {
  id: number;
  text: string;
}

const SongContext = createContext<{
  songInput?: Song[];
  updateSong?: (inputValue?: string, elementId?: number) => void;
  removeSong?: (elementId?: number) => null;
}>({});

export const SongProvider = ({ children }) => {
  const [songInput, setSongInput] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
  ]);

  const updateSong = (inputValue: string, elementId: number) => {
    songInput.filter((song: Song) => {
      const idStr = song.id;
      if (idStr === elementId) {
        song.text = inputValue;
        setSongInput([...songInput]);
      }
    });
  };

  const removeSong = (elementId: number) => {
    songInput.filter((song: Song) => {
      const idStr = song.id;
      if (idStr === elementId) {
        song.text = "";
        setSongInput([...songInput]);
      }
    });
  };

  return (
    <SongContext.Provider value={{ songInput, updateSong }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongContext;
