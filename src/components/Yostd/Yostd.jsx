import React from 'react'
import HeadingText from '../HeadingText/HeadingText'
import Yostdslider from '../YostdSlider/YostdSlider'
import styles from '../../styles/yostd.module.css'

const Yostd = () => {
    return (
        <div className={styles.yostd}>
             <div className={styles.heading}>
                <HeadingText text="YorStores Of The Day"/>
            </div>
            <div className={styles.yostd_slider}>
                <Yostdslider />

            </div>
        </div>
    )
}

export default Yostd
