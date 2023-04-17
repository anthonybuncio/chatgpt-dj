import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import TopCharts from "@/components/Lists/TopCharts";
import TopPop from "@/components/Lists/TopPop";
import TopRap from "@/components/Lists/TopRap";

export default function Browse() {
  return (
    <>
      <div className="flex min-h-full flex-row items-start justify-start">
        <div className="">
          <Menu />
        </div>
        <div className="w-full">
          <Nav />
          <TopCharts />
          <TopRap />
          <TopPop />
        </div>
      </div>
    </>
  );
}
