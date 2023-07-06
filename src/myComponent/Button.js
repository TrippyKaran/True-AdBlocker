import React from 'react'
import styles from '../styles/button.module.scss'

const Button = ({text,icon}) => {
  return (
    <button className={styles.btn}>
        {icon && icon}
        {text}
      </button>
  )
}

export default Button