import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import PopularArtists from "@/components/PopularArtists";
import SpotifyArtists from "@/components/SpotifyArtists";

export default function Browse() {
  return (
    <>
      <main className="flex min-h-screen flex-row items-start justify-start">
        <div>
          <Menu />
        </div>
        <div className="w-full">
          <Nav />
          <PopularArtists />
        </div>
      </main>
    </>
  );
}
