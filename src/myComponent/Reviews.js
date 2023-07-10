import React from "react";
import styles from "../styles/reviews.module.scss";

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.bg1}>
        <img src="./Ellipse 10.svg" alt="Ellipse" />
      </div>
      <div className={styles.bg2}>
        <img src="./Ellipse 9.svg" alt="Ellipse" />
      </div>
      <div className={styles.bg3}>
        <img src="./Ellipse 9.svg" alt="Ellipse" />
      </div>
      <div className={styles.container}>
        <h2>RATES REVIEWS</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.profile}>
              <img src="./avatar.svg" alt="profile-image" />
              <h3> Jese Leo</h3>
            </div>
            <div className={styles.rating}>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
            </div>
            <div className={styles.text}>
              <p>
                Amazing work by this best adblock chrome, guys! Now I can browse
                faster now that I'm not receiving the obnoxious adverts and
                pop-ups!
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.profile}>
              <img src="./avatar-1.png" alt="profile-image" />
              <h3> Peter Smith</h3>
            </div>
            <div className={styles.rating}>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
            </div>
            <div className={styles.text}>
              <p>
                Highly recommended! As this amazing adblock chrome extension
                prevents interruptions while you are browsing the internet,
                block adverts and run in the background.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.profile}>
              <img src="./avatar-2.png" alt="profile-image" />
              <h3> Michael Garcia</h3>
            </div>
            <div className={styles.rating}>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
            </div>
            <div className={styles.text}>
              <p>
                My favourite extension is adblocker google chrome the one that
                blocks everything! Now I can shop online and avoid having to
                look at the dress I didn't buy for the rest of time on the side
                of my screen! This is the best adblock for chrome.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.profile}>
              <img src="./avatar-3.png" alt="profile-image" />
              <h3> Benjamin Brown</h3>
            </div>
            <div className={styles.rating}>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
            </div>
            <div className={styles.text}>
              <p>
                My browsing experience has changed dramatically thanks to
                TrueAdBlocker or free adblock for chrome. It successfully
                suppresses adverts and pop-ups so I can concentrate on the
                content I want to view. Very strongly advised!"
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.profile}>
              <img src="./avatar-4.png" alt="profile-image" />
              <h3> James Johnson</h3>
            </div>
            <div className={styles.rating}>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
            </div>
            <div className={styles.text}>
              <p>
                Anyone who is sick of invasive advertisements needs
                trueAdBlocker or total adblock. It not only gets rid of
                advertisements on websites but also provides cutting-edge tools
                for blocking them on well-known streaming services.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.profile}>
              <img src="./avatar-5.png" alt="profile-image" />
              <h3>William Smith</h3>
            </div>
            <div className={styles.rating}>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
              <span>
                <img src="./stars.svg" alt="star" />
              </span>
            </div>
            <div className={styles.text}>
              <p>
                I've used a number of ad-blockers, but TrueAdBlocker or free
                adblock for chrome stands out for providing the best
                performance. My web browsing is quicker and more fun as a result
                of the seamless ad blocking across numerous websites.
              </p>
            </div>
          </div>
        </div>

        <button>READ ALL REVIEWS</button>
      </div>
    </div>
  );
};

export default Reviews;
