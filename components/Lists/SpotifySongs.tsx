import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import AlbumCarousel from "../AlbumCarousel";

const SpotifySongs = () => {
  const { data: spotifyTopSongsData } = useSWR(
    "/api/stats/top-tracks",
    fetcher
  );

  return (
    <section>
      <AlbumCarousel
        data={spotifyTopSongsData}
        title={"My Top Spotify Songs"}
        slug={"top-spotify-songs"}
      />
    </section>
  );
};

export default SpotifySongs;
