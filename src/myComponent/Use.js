import React from 'react'
import styles from '../styles/use.module.scss'
import Button from './Button'


const Use = () => {
  return (
    <div className={styles.use}>
        <div className={styles.bg1}>
            <img src='./Ellipse 10.svg' alt='Ellipse'/>
        </div>
        <div className={styles.container}>
            <h2>WHAT IS IT’S USE?</h2>

            <div className={styles.content}>
                <div className={styles.left}>
                        <p>1. Install the Chrome extension for <span>free adblock</span> for chrome.</p>
                        <p>2. Securely fasten the extension to the toolbar with <span>free adblock for chrome.</span></p>
                        <p>3. Launch the extension and turn on ad blocking with<span> total adblock.</span></p>
                        <p>4. <span>Bingo! </span>You can now view movies without commercials with free adblock for chrome.</p>
                </div>
                <div className={styles.right}>
                    <h3>BROWSERS ADD-ON</h3>
                    <p>A free online browser add-on called <span>TRUEADBLOCKER</span> or free adblock for chrome, completely blocks all unwanted advertisements. It does not come with a pre-defined whitelist as its competitors do.</p>
                    <Button text="GET TRUE ADBLOCKER NOW"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Use