import React from 'react'
import Hamburger from '../Hamburger/Hamburger'
import Logo from '../Logo/Logo'
import LinkText from '../LinkText/LinkText'
import styles from '../../styles/header.module.css'
import { Link } from "react-router-dom";
import { LOGIN } from "../../routing/paths"
const Header = () => {
    return (
        <div className={styles.header}>
            <Hamburger/>
            <Logo/>
            <Link to={LOGIN}>
                <LinkText href="#" text="SignIn"/>
            </Link>
        </div>
    )
}

export default Header
