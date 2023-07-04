import React from 'react'
import styles from '../styles/whyus.module.scss'
import Button from './Button'

const WhyUs = () => {
  return (
    <div className={styles['why-us']}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>FREE ADBLOCK FOR <br/> CHROME</h2>
          <p>The features of <span>TRUEADBLOCKER</span> free adblock for chrome for Windows go beyond ad blocking. It is a multifunctional application that guards kids from unsuitable content, prevents adverts, restricts access to risky websites, and speeds up page loading.</p>
        </div>
        <div className={styles.right}>
          <h2>CHOOSE US</h2>
          <ul>
            <li>
              <img src='./uil_youtube.svg'/> 
              Block youtube ads chrome
            </li>
            <li>
              <img src='./mdi_twitch.svg'/> 
              Blocks unwanted twitch adblock extension
            </li>
            <li>
              <img src='./fontisto_spotify.svg'/> 
              Listen your favorite music with spotify adblock
            </li>
            <li>
              <img src='./simple-icons_hulu.svg'/> 
              Watch endless series with hulu no ads
            </li>
            <li>
              <img src='./simple-icons_adblock.svg'/> 
              Block pop up ads with total adblock.
            </li>
            
          </ul>
          <Button text="GET TRUE ADBLOCKER NOW"/>
        </div>
      </div>
    </div>
  )
}

export default WhyUs