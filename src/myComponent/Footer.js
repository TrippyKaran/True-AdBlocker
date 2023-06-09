import React from "react";
import styles from "../styles/footer.module.scss";
import Button from "./Button";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2>True AdBlocker</h2>
        <p>
          True Adblocker removes all unwanted ads and block pop-ups ads. It is
          the <span>BEST</span> and <span>FREE</span> Adblock
        </p>

        <Button text="GET TRUE ADBLOCKER NOW" />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Popular Searches : </span> youtube no ads, chrome youtube
              adblocker, hulu without ads, pop up blocker chrome, adblock
              fireforx, twitch adblock firefox, adguard ablocker, twitch adblock
              chrome, adblock extension chrome, ad blocker chrome extension,
              pop-up ads, ad blocker google chrome and google chrome ad blocker.
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <a href="/">
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillTwitterCircle className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Condition</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
