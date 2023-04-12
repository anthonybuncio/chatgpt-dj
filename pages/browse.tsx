import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import PopularArtists from "@/components/PopularArtists";
import TopCharts from "@/components/TopCharts";
import TopPop from "@/components/TopPop";

export default function Browse() {
  return (
    <>
      <main className="flex min-h-full flex-row items-start justify-start">
        <div className="">
          <Menu />
        </div>
        <div className="w-full">
          <Nav />
          <TopCharts />
          <PopularArtists />
          <TopPop />
        </div>
      </main>
    </>
  );
}
