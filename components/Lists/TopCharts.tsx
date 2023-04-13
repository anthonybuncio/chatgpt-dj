import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import AlbumCarousel from "../AlbumCarousel";

const TopCharts = () => {
  const { data: topChartsData } = useSWR("/api/playlists/top-charts", fetcher);

  return (
    <section>
      <AlbumCarousel
        data={topChartsData}
        title={"Popular US Songs"}
        slug={"popular-tracks"}
      />
    </section>
  );
};

export default TopCharts;
