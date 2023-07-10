import React from "react";
import WhyUs from "../myComponent/WhyUs";
import TopPoints from "../myComponent/TopPoints";
import WhyTrueAdBlocker from "../myComponent/WhyTrueAdBlocker";
import FeaturesOfTrueAdBlocker from "../myComponent/FeaturesOfTrueAdBlocker";
import Benefits from "../myComponent/Benefits";
import Use from "../myComponent/Use";
import AboutTrueAdBlocker from "../myComponent/AboutTrueAdBlocker";
import FrequentlyAskedQuestion from "../myComponent/FrequentlyAskedQuestion";
import Reviews from "../myComponent/Reviews";
import HeroStyles from "../styles/hero.module.scss";
import { AiFillChrome } from "react-icons/ai";
import Header from "../myComponent/Header";


const Home = () => {
  return (
    <>
      <div className={HeroStyles.hero}>
        <Header />
        <div className={HeroStyles.container}>
          <h2 className={HeroStyles.subtitle1}>YOUR BEST CHOICE</h2>
          <h1 className={HeroStyles.heading}>True AdBlocker</h1>
          <p className={HeroStyles.subtitle2}>
            True Adblocker removes all unwanted ads and block pop-ups ads. It is
            the <span>BEST</span> and <span>FREE</span> Adblock
          </p>

          <a
            href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
            target="_blank"
          >
            <button className={HeroStyles.btn}>
              <AiFillChrome /> Add to Chrome
            </button>
          </a>
        </div>
      </div>
      <WhyUs />
      <TopPoints />
      <WhyTrueAdBlocker />
      <FeaturesOfTrueAdBlocker />
      <Benefits />
      <Use />
      <AboutTrueAdBlocker />
      <FrequentlyAskedQuestion />
      <Reviews />
    </>
  );
};

export default Home;
