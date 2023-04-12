import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import PopularArtists from "@/components/PopularArtists";
import SpotifyArtists from "@/components/SpotifyArtists";
import SpotifySongs from "@/components/SpotifySongs";
import Head from "next/head";

const MyMusic = () => {
  return (
    <>
      <main className="flex min-h-screen flex-row items-start justify-start">
        <div>
          <Menu />
        </div>
        <div className="w-full">
          <Nav />
          <SpotifyArtists />
          <SpotifySongs />
        </div>
      </main>
    </>
  );
};

export default MyMusic;
