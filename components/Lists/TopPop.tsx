import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import AlbumCarousel from "../AlbumCarousel";

const TopPop = () => {
  const { data: topPopData } = useSWR("/api/playlists/top-pop", fetcher);

  return (
    <section>
      <AlbumCarousel
        data={topPopData}
        title={"Top Pop Songs"}
        slug={"top-pop"}
      />
    </section>
  );
};

export default TopPop;
