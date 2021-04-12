import React from 'react'
import { OTP,SIGNUP } from "../../routing/paths";
import { Link } from "react-router-dom";
import Button from '../../components/Common/Buttons/Button'
import styles from '../../styles/signUp.module.css'
const Signup = () => {
    return (
        <div className={styles.sign_up}>
             <img src="/images/brand_icon.svg" alt="brand_logo" />
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Mobile Number" />
      <Link to={OTP}>
       <Button btnClass='btn btn_primary' text="SEND OTP"/>
      </Link>
      <span>
      By clicking send OTP you accept the <Link to ={SIGNUP}>Terms & Conditions.</Link>
      </span>
        </div>
    )
}

export default Signup
