import React from "react";
import Head from "next/head"; // Import the Head component
import Header from "./components/Header";
import CarOusal from "./components/Carousal";
import SaleBanner from "./components/SaleBanner";
import fav from "./FavIcons/favicon.ico";
import Banner from "./components/Banner";
import { Roboto, ABeeZee } from "next/font/google";
const roboto = ABeeZee({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
}); // Import the global CSS file

const Home = () => {
  return (
    <div className={roboto.className}>
      <Head>
        <title>Urban Cart</title>

        <link rel="icon" href={fav} />
      </Head>
      <Header />
      {/* <Banner/> */}
      <CarOusal />
      <SaleBanner />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
