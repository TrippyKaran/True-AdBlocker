import React from "react";
import styles from "../styles/whyTrueAdBlocker.module.scss";

const WhyTrueAdBlocker = () => {
  return (
    <div className={styles["why-true-ad-blocker"]}>
      <div className={styles.bg1}>
        <img src="./Ellipse 10.svg" alt="Ellipse" />
      </div>
      <div className={styles.bg2}>
        <img src="./Ellipse 9.svg" alt="Ellipse" />
      </div>
      <div className={styles.container}>
        <h2> WHY TRUE ADBLOCKER</h2>

        <div className={styles.content}>
          <div className={styles.row1}>
            <span>WHY TRUE ADBLOCKER</span>
            <span>
              <img
                src="./ant-design_safety-outlined.svg"
                alt="ant-design_safety-outlined"
              />
              TRUE ADBLOCKER
            </span>
            <span>
              <img src="./eva_cube-fill.svg" alt="eva_cube-fill" />
              COMMON EXTENTION
            </span>
          </div>

          <div className={styles.row}>
            <span>Stop online adverts</span>
          </div>
          <div className={styles.row}>
            <span>
              Today's best adblock for chrome are generally good at what they
              do.
            </span>
            <span>YES</span>
            <span>YES</span>
          </div>
          <div className={styles.row}>
            <span colSpan="3">Fasten up page loading</span>
          </div>
          <div className={styles.row}>
            <span>
              Trueadblocker removes advert before they are downloaded to your
              device by your browser, as opposed to ad block extension chrome.
            </span>
            <span>YES</span>
            <span>YES</span>
          </div>
          <div className={styles.row}>
            <span colSpan="3">Eliminates Irritants</span>
          </div>
          <div className={styles.row}>
            <span>
              Filters in adguard adblocker can block obtrusive components.
            </span>
            <span>YES</span>
            <span>PARTLY</span>
          </div>
          <div className={styles.row}>
            <span colSpan="3">Keeps sites functional</span>
          </div>
          <div className={styles.row}>
            <span>
              After deleting ad sections, the majority of best adblock Firefox
              keep their page functionally
            </span>
            <span>YES</span>
            <span>NO</span>
          </div>
          <div className={styles.row}>
            <span>Technical assistance with Spotify adblock</span>
          </div>
          <div className={styles.row}>
            <span>
              This adblock chrome extension has best technical assistance
            </span>
            <span>YES</span>
            <span>NO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTrueAdBlocker;
