import { SongProvider } from "@/components/SongProvider";
import fetcher from "@/lib/fetcher";
import useWindowSize from "@/lib/hooks/useWindowSize";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import useSWR from "swr";

const demo = [{ id: 1, text: "Kanye West - Heartless" }];

export default function App({ Component, pageProps }: AppProps) {
  const windowSize = useWindowSize();
  console.log(windowSize);
  return (
    <>
      <Head>
        <title>PLAY-i 🎧AI Generated Playlists</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 dark:bg-gradient-to-b dark:from-gray-900 dark:via-purple-900 dark:to-violet-600">
        <SongProvider>
          <Component {...pageProps} />
        </SongProvider>
      </main>
    </>
  );
}
