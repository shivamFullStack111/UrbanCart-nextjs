import React from "react";
import Head from "next/head"; // Import the Head component
import Header from "./components/Header";
import CarOusal from "./components/Carousal";
import SaleBanner from "./components/SaleBanner";
import fav from "./FavIcons/favicon.ico";
import Banner from "./components/Banner";
import { Roboto, ABeeZee, Quicksand } from "next/font/google";
import LowwersCarousel from "./components/LowwersCarousel";
import Footer from "./components/Footer";
const roboto = Quicksand({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
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
      <div className="max-800px:pt-16">
        <CarOusal />
      </div>
      <SaleBanner />
      {/* <Footer/> */}
      <LowwersCarousel />
      <Footer />
    </div>
  );
};

export default Home;
