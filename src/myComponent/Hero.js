import React from "react";
import styles from "../styles/hero.module.scss";
import Button from "./Button";
import Header from "./Header";
import { AiFillChrome } from "react-icons/ai";


const Hero = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.subtitle1}>YOUR BEST CHOICE</h2>
        <h1 className={styles.heading}>True AdBlocker</h1>
        <p className={styles.subtitle2}>
          True Adblocker removes all unwanted ads and block pop-ups ads. It is
          the <span>BEST</span> and <span>FREE</span> Adblock
        </p>
        <a
          href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
          target="_blank"
        >
          <a
            href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
            target="_blank"
          >
            <button className={styles.btn}>
              <AiFillChrome /> Add to Chrome
            </button>
          </a>
        </a>
      </div>
    </div>
  );
};

export default Hero;
