import React, { useEffect, useState } from "react";
import styles from "../styles/header.module.scss";
import { AiFillChrome } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link to="/">
              <img src="./nav-logo.svg" alt="TrueAdBlockerLogo" />
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className={styles.link}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className={styles.link}>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
        <a
          href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
          target="_blank"
        >
          <button className={styles.btn}>
            <AiFillChrome /> Add to Chrome
          </button>
        </a>

        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.link}>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className={styles.link}>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className={styles.link}>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
          <a
            href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
            target="_blank"
          >
            <button className={styles.btn}>
              <AiFillChrome /> Add to Chrome
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
