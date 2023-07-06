import React from 'react'
import styles from '../styles/footer.module.scss'
import Button from './Button'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2>True AdBlocker</h2>
        <p>True Adblocker removes all unwanted ads and block pop-ups ads. It is the <span>BEST</span> and <span>FREE</span> Adblock</p>
        <Button text="GET TRUE ADBLOCKER NOW"/>
      </div>
    </div>
  )
}

export default Footer