import React from "react";
import Hero from "../myComponent/Hero";
import Contact_us from "../myComponent/Contact_us";
import Footer from "../myComponent/Footer";
import styles from "../styles/contact.module.scss";

const ContactUs = () => {
  return (
    <>
      <Hero />
      <Contact_us />
      <div className={styles.contact}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <div className={styles.content}>
            <div className={styles.item}>
              <label></label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
