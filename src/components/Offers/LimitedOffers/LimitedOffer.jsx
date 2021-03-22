import React from 'react'
import styles from './limitedOffer.module.css'
const Limitedoffer = () => {
    return (
        <div className={styles.limited_offers}>
            <div className={styles.card_top}>
                <span className={styles.time_left}>2 Days left</span>
                <img src='/images/dropdown.svg' alt='dropdown' className={styles.dropdown}/>
            </div>
            <div className={styles.card_content}>
                <span className={styles.offer_name}>Buy 2 get One free</span>
                <p className={styles.offer_description}>One free coffee & one pizza @150</p>
            </div>
            <div className={styles.card_footer}>
                <img src='/images/barista.svg' className={styles.store_logo_circle} alt='dropdown'/>
                <span className={styles.store_tags}>
                    StoreName | Category | Plan Type
                </span>
                <img src='/images/heart.svg' className={styles.wishlist} alt='wishlist'/>
                <img src='/images/ellipsis.svg' className={styles.options} alt='ellipsis'/>
            </div>
            
        </div>
    )
}

export default Limitedoffer
