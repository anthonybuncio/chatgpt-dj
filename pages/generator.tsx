import AiPlaylist from "@/components/AiPlaylist";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import SavedPlaylists from "@/components/SavedPlaylists";
import SongForm from "@/components/SongForm";

export default function Generator() {
  return (
    <>
      <main className="flex min-h-screen flex-row items-start justify-start">
        <div>
          <Menu />
        </div>
        <div className="w-full">
          <Nav />
          <div className="flex flex-row ">
            <SongForm />
            <AiPlaylist />
            <SavedPlaylists />
          </div>
        </div>
      </main>
    </>
  );
}
