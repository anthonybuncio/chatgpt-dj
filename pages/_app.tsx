import { SongProvider } from "@/components/SongProvider";
import useWindowSize from "@/lib/hooks/useWindowSize";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Raleway } from "next/font/google";

const fontRaleway = Raleway({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const windowSize = useWindowSize();
  console.log(windowSize);
  return (
    <>
      <Head>
        <title>PLAY-i 🎧AI Generated Playlists</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main
        className={`${fontRaleway.className} bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700`}
      >
        <SongProvider>
          <Component {...pageProps} />
        </SongProvider>
      </main>
    </>
  );
}
