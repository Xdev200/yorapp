import React from 'react'
import styles from '../../../styles/regularOffer.module.css'
const RegularOffer = () => {
    return (
        <div className={styles.regular_offers}>
            <div className={styles.regular_card}>
                <div className={styles.card_img}>
                    <img src='images/regular_offer.png'  alt='regular offers' />
                    <span className={styles.plan_name}>PLATINUM</span>
                </div>
                <div className={styles.card_content}>
                    <span className={styles.plan_type}>15% OFF</span>
                    <img src='/images/dropdown.svg' alt='dropdown' className={styles.dropdown}/>
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
        </div>
    )
}

export default RegularOffer
