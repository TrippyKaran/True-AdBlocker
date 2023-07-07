import React from "react";
import styles from "../styles/button.module.scss";

const Button = ({ text, icon }) => {
  return (
    <a href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm">
      <button className={styles.btn}>
        {icon && icon}
        {text}
      </button>
    </a>
  );
};

export default Button;
