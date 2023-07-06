import React from "react";
import styles from "../styles/featuresOfTrueAdBlocker.module.scss";

const FeaturesOfTrueAdBlocker = () => {
  return (
    <div className={styles.featuresOfTrueAdBlocker}>
      <div className={styles.bg1}>
        <img src="./Ellipse 10.svg" alt="Ellipse" />
      </div>
      <div className={styles.bg2}>
        <img src="./Ellipse 9.svg" alt="Ellipse" />
      </div>
      <div className={styles.container}>
        <h2>FEATURES OF TRUE AD BLOCKER</h2>

        <div className={styles.top}>
          <div className={styles.card}>
            <img src="./Слой 2.svg" alt="Слой 2" />
            <span>
              Take control on your Twitch experience with free Adblock for
              chrome or Twitch ad blocker and watch ad free series. You can
              enjoy your favorite content with twitch adblock.{" "}
            </span>
          </div>
          <div className={styles.card}>
            <img src="./Ресурс 1 2.svg" alt="Ресурс 1 2" />
            <span>
              Experience uninterrupted video ads on Youtube with free Adblock
              for chrome or youtube adblock chrome and watch your favroite show
              freely with youtube ad blocker. In adblocker youtube, you can
              watch your favroite content without any annoying ads.
            </span>
          </div>

          <div className={styles.card}>
            <img src="./Ресурс 2 6.svg" alt="Ресурс 2 6" />
            <span>
              Enhance your spotify experience by blocking annoying ads at
              spotify adblocker and immerse yourself with uninterrupted music
              with free Adblock for chrome. With Spotify adblocker, you can
              listen your favroite song.{" "}
            </span>
          </div>
          <div className={styles.card}>
            <img src="./Frame 20.svg" alt="Frame 20.svg" />
            <span>
              Say hulu no ads with total adblock and watch your favroite content
              without interruptions in adblock for hulu. By this you can watch
              your most loved show with hulu adblocker.
            </span>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>Block Sponsered ads</span>
              <span className={styles["item-text"]}>
                Say goodbye to sponsored ads with free Adblock for chrome.
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles["item-title"]}>Popup Ads blocker</span>
              <span className={styles["item-text"]}>
                Block unwanted ads and give control over your online space with
                free Adblock for chrome or pop up adblocker.
              </span>
            </div>
          </div>
          <div className={styles.middle}>
            <img src="./BlockAd.svg" alt="block-ad-logo" />
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>Block Google Ads</span>
              <span className={styles["item-text"]}>
                Take control on your online privacy and block google ads with
                total adblock.
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Preventing Online Threats
              </span>
              <span className={styles["item-text"]}>
                Helps you avoid all phishing sites and domains that are known to
                spread malware in total adblock.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
