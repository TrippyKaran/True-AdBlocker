import React from 'react'
import styles from "../styles/header.module.scss"
import { AiFillChrome } from "react-icons/ai";
import Button from './Button';


const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.logo}>
          <img src='./nav-logo.svg' alt='TrueAdBlockerLogo'/>
        </li>
        <li className={styles.link}>Home</li>
        <li className={styles.link}>Blogs</li>
        <li className={styles.link}>Contact Us</li>
        <li className={styles.link}>About Us</li>
      </ul>
      <Button text="Add to Chrome" icon={<AiFillChrome/>}/>
    </nav>
  )
}

export default Header