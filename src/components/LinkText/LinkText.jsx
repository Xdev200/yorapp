import React from 'react'
import styles from './linktext.module.css'
const Linktext = ({href,text}) => {
    return (
      <a href={href} className={styles.linktext}>{text}</a>
    )
}

export default Linktext
