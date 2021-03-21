import React from 'react'
import Hamburger from '../Hamburger/Hamburger'
import Logo from '../Logo/Logo'
import LinkText from '../LinkText/LinkText'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Hamburger/>
            <Logo/>
            <LinkText href="#" text="SignIn"/>
        </div>
    )
}

export default Header
