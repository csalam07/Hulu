import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import requests from "../utils/request";

export default function Home({ results }) {
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Body results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
