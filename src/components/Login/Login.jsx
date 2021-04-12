import React from 'react'
import styles from './login.module.css'
const Login = () => {
    return (
        <div className={styles.login}>
            <img src='/images/brand_icon.svg' alt='brand_logo'/>
            <input type='text'/>
            <button>LOG-IN</button>
            <span>Don't have an account? <a href='#!'>Sign Up!</a></span>
        </div>
    )
}

export default Login
