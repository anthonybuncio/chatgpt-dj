import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import AlbumCarousel from "../AlbumCarousel";

const SpotifyArtists = () => {
  const { data: spotifyArtistData } = useSWR("/api/stats/top-artists", fetcher);

  return (
    <section>
      <AlbumCarousel
        data={spotifyArtistData}
        title={"My Top Spotify Artists"}
        slug={"top-spotify-artists"}
      />
    </section>
  );
};

export default SpotifyArtists;
