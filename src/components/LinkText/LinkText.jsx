import React from 'react'
import styles from '../../styles/linktext.module.css'
const LinkText = ({href,text}) => {
    return (
      <a href={href} className={styles.linktext}>{text}</a>
    )
}

export default LinkText
