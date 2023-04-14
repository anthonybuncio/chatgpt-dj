import { createContext, useState } from "react";

interface Song {
  id: number;
  text: string;
}

const SongContext = createContext<{
  songInput?: Song[];
  updateSong?: (inputValue?: string, elementId?: string) => void;
}>({});

export const SongProvider = ({ children }) => {
  const [songInput, setSongInput] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
  ]);

  const updateSong = (inputValue: string, elementId: string) => {
    songInput.filter((song: Song) => {
      console.log(song);
      const idStr = song.id.toString();
      if (idStr === elementId) {
        song.text = inputValue;
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
