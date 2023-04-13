import { createContext, useState } from "react";

interface Song {
  id: number;
  text: string;
}

const SongContext = createContext<{
  songInput?: Song[];
  setSongInput?: (songInput?: Song[]) => void;
}>({});

export const SongProvider = ({ children }) => {
  const [songInput, setSongInput] = useState([
    {
      id: 1,
      text: "",
    },
    {
      id: 2,
      text: "",
    },
    {
      id: 3,
      text: "",
    },
    {
      id: 4,
      text: "",
    },
    {
      id: 5,
      text: "",
    },
  ]);

  return (
    <SongContext.Provider value={{ songInput, setSongInput }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongContext;
