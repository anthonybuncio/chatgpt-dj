import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PLAY AI ▶️ ChatGPT powered playlists.</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="bg-gradient-to-t from-purple-200 via-gray-200 to-orange-200">
        <Component {...pageProps} />
      </div>
    </>
  );
}
