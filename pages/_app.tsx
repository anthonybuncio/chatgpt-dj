import { SongProvider } from "@/components/SongProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const demo = [{ id: 1, text: "Kanye West - Heartless" }];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PLAY-i 🎧AI Generated Playlists</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="bg-gradient-to-t from-purple-200 via-gray-200 to-orange-200">
        <SongProvider>
          <Component {...pageProps} />
        </SongProvider>
      </div>
    </>
  );
}
