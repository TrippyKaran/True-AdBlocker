import React, { useState } from "react";
import styles from "../styles/header.module.scss";
import { AiFillChrome } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <img src="./nav-logo.svg" alt="TrueAdBlockerLogo" />
          </li>
          <li className={styles.link}>Home</li>
          <li className={styles.link}>Blogs</li>
          <li className={styles.link}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className={styles.link}>About Us</li>
        </ul>
        <button className={styles.btn}>
          <AiFillChrome /> Add to Chrome
        </button>

        <div
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen((prev) => !isOpen)}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <ul className={styles.links}>
            <li className={styles.link}>Home</li>
            <li className={styles.link}>Blogs</li>
            <li className={styles.link}>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className={styles.link}>About Us</li>
          </ul>
          <button className={styles.btn}>
            <AiFillChrome /> Add to Chrome
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
