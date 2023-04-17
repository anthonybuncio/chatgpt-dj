import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import SpotifyArtists from "@/components/Lists/SpotifyArtists";
import SpotifySongs from "@/components/Lists/SpotifySongs";

const MyMusic = () => {
  return (
    <>
      <div className="flex min-h-screen flex-row items-start justify-start">
        <div>
          <Menu />
        </div>
        <div className="w-full">
          <Nav />
          <SpotifyArtists />
          <SpotifySongs />
        </div>
      </div>
    </>
  );
};

export default MyMusic;
