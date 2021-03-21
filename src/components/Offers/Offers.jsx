import React from 'react'
import HeadingText from '../HeadingText/HeadingText'
import RegularOffers from './RegularOffers/RegularOffer'
import LimitedOffers from './LimitedOffers/LimitedOffer'
import styles from './offers.module.css'

const Offers = () => {
    return (
        <div className={styles.offers}>
            <HeadingText text="Live Offers"/>
            <RegularOffers/>
            <LimitedOffers/>
            
        </div>
    )
}

export default Offers
