import { createContext, useCallback, useContext, useReducer } from "react";

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

interface Song {
  id: number;
  text: string;
}

type UseInputValueResult = ReturnType<typeof useInputValue>;

export const InputContext = createContext<UseInputValueResult>({
  songInputs: [],
  addSong: () => {},
  removeSong: () => {},
});

export function useInputValue(initialSongs: Song[]): {
  songInputs: Song[];
  addSong: (text: string) => void;
  removeSong: (id: number) => void;
} {
  const [songInputs, dispatch] = useReducer(
    (state: Song[], action: ActionType) => {
      switch (action.type) {
        case "ADD":
          return [
            ...state,
            {
              id: state.length,
              text: action.text,
            },
          ];
        case "REMOVE":
          return state.filter(({ id }) => id !== action.id);
        default:
          throw new Error();
      }
    },
    initialSongs
  );

  const addSong = useCallback((text: string) => {
    dispatch({
      type: "ADD",
      text,
    });
  }, []);

  const removeSong = useCallback((id: number) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  }, []);

  return { songInputs, addSong, removeSong };
}

export const SongProvider: React.FunctionComponent<{
  initialSongs: Song[];
}> = ({ initialSongs }) => {
  return (
    <InputContext.Provider value={useInputValue(initialSongs)}>
      {/* {children} */}
    </InputContext.Provider>
  );
};

export const useSongInputs = (): Song[] => {
  const { songInputs } = useContext(InputContext);
  return songInputs;
};

export const useAddSong = (): UseInputValueResult["addSong"] => {
  const { addSong } = useContext(InputContext);
  return addSong;
};

export const useRemoveSong = (): UseInputValueResult["removeSong"] => {
  const { removeSong } = useContext(InputContext);
  return removeSong;
};
