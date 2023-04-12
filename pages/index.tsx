import { Inter } from "next/font/google";
import Head from "next/head";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import SpotifySongs from "@/components/SpotifySongs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-row items-start justify-start">
        <div>
          <Menu />
        </div>
        <div className="w-full">
          <Nav />
          <SpotifySongs />
        </div>
      </main>
    </>
  );
}
