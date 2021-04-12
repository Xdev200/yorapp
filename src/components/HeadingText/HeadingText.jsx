import React from 'react'
import styles from '../../styles/headingText.module.css'
const Headingtext = ({text}) => {
    return (
        <h3 className={styles.heading}>{text}</h3>
    )
}

export default Headingtext
