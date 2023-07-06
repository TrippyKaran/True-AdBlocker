import React from "react";
import styles from "../styles/topPoints.module.scss";

const TopPoints = () => {
  return (
    <div className={styles["top-points"]}>
      <div className={styles.bg1}>
        <img src="./Ellipse 5.svg" />
      </div>
      <div className={styles.bg2}>
        <img src="./Ellipse 6.svg" />
      </div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.card}>
            <img src="./subway_time-1.svg" alt="subway_time-1" />
            <h3>Boost your speed</h3>
            <p>
              with <span> adblock chrome extension </span> Experience a quicker
              Internet while improving page load times with{" "}
              <span> twitch adblock extension</span>
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="./healthicons_fingerprint-outline.svg"
              alt="healthicons_fingerprint-outline"
            />
            <h3>Maintain Your Privacy</h3>
            <p>
              With <span> adblock extension </span>Avoid letting online ads
              follow you.
            </p>
          </div>
          <div className={styles.card}>
            <img src="./jam_task-list.svg" alt="jam_task-list" />
            <h3>Eliminate Distractions </h3>
            <p>
              With <span> total adblock </span>Remove pop-ups, banners, and
              video advertising with <span> chrome extension adblock.</span>
            </p>
          </div>
          <div className={styles.card}>
            <img src="./eva_cube-fill.svg" alt="eva_cube-fill" />
            <h3>Assistance Websites </h3>
            <p>
              with <span> total adblock </span>By permitting Acceptable Ads, you may promote a
              robust online environment for websites.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="./ant-design_control-outlined.svg"
              alt="ant-design_control-outlined"
            />
            <h3>Parenting control </h3>
            <p>
              With <span> free adblock for chrome. </span> By using parenting
              control, you can restrict such adults websites.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <h2>TOP POINTS FOR TRUE ADBLOCKER</h2>
          <div className={styles.content}>
            <div className={styles.item}>
              <ul>
                <li>
                  <img
                    src="./icon-park-outline_ad.svg"
                    alt="icon-park-outline_ad"
                  />
                  Blocks all advertisements with total adblock.
                </li>
                <li>
                  <img src="./uiw_chrome.svg" alt="uiw_chrome" />
                  Eliminates unwanted web components with free adblock for
                  chrome.
                </li>
                <li>
                  <img
                    src="./fluent_top-speed-20-filled.svg"
                    alt="fluent_top-speed-20-filled.svg"
                  />
                  Reduces traffic and improves page load with free adblock for
                  chrome.
                </li>
                <li>
                  <img
                    src="./akar-icons_network.svg"
                    alt="akar-icons_network"
                  />
                  Works with apps and browsers with total adblock.
                </li>
                <li>
                  <img
                    src="./material-symbols_wall-art-rounded.svg"
                    alt="material-symbols_wall-art-rounded"
                  />
                  Keeps the site's design and functionality intact with free
                  adblock for chrome.
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <ul>
                <li>
                  {" "}
                  <h3>ADD-FREE AND SUCURE WEB BROWSING</h3>
                </li>
                <li>
                  <img src="./Group.svg" alt="Group" />
                  Banner, pop-ups and video adverts are removed using adblock
                  chrome.
                </li>
                <li>
                  <img src="./twemoji_top-arrow.svg" alt="twemoji_top-arrow" />
                  This best adblock chrome extension offers defence against
                  dangerous websites.
                </li>
                <li>
                  <img
                    src="./healthicons_fingerprint-outline.svg"
                    alt="healthicons_fingerprint-outline"
                  />
                  This best adblock chrome extension offers defence against
                  dangerous websites.
                </li>
                <li>
                  <img src="./mdi_children-toy.svg" alt="mdi_children-toy" />
                  Children are protected from inappropriate content with this
                  adblock chrome extension.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPoints;
