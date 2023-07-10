import React from "react";
import styles from "../styles/contact.module.scss";
import emailjs from "@emailjs/browser";
import HeroStyles from "../styles/hero.module.scss";
import { AiFillChrome } from "react-icons/ai";
import Header from "../myComponent/Header";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_je4cpqa",
        "template_ie50gdm",
        e.target,
        "e6VEQ3Kk59d-W-GoJ"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
      <div className={styles.contact}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <form className={styles.form} onSubmit={sendEmail}>
            <div className={styles.item}>
              <label htmlFor="name">Enter your name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your name"
                name="email"
                required
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="10"
                name="message"
                placeholder="Enter your message....."
                required
              ></textarea>
            </div>
            <div className={styles.item}>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
