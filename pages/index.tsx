import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import Link from "next/link";
import { useState } from "react";

export default function Landing() {
  return (
    <>
      <main className="flex min-h-screen flex-row items-center justify-center">
        <Link href="/generator">
          <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            Sign In With Spotify
          </button>
        </Link>
      </main>
    </>
  );
}
