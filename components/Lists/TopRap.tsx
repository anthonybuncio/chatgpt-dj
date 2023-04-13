import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import AlbumCarousel from "../AlbumCarousel";

const TopRap = () => {
  const { data: topRapData } = useSWR("/api/playlists/top-rap", fetcher);

  return (
    <section>
      <AlbumCarousel
        data={topRapData}
        title={"Top Rap Songs"}
        slug={"top-rap"}
      />
    </section>
  );
};

export default TopRap;
