import React from "react";
import styles from "../../styles/login.module.css";
import { OTP,SIGNUP } from "../../routing/paths";
import { Link } from "react-router-dom";
import Button from '../../components/Common/Buttons/Button'
const Login = () => {
  return (
    <div className={styles.login}>
      <img src="/images/brand_icon.svg" alt="brand_logo" />
      <input type="text" placeholder="Mobile Number" />
      <Link to={OTP}>
       <Button btnClass='btn btn_primary' text="LOG-IN"/>
      </Link>
      <span>
        Don't have an account? <Link to ={SIGNUP}>Sign Up!</Link>
      </span>
    </div>
  );
};

export default Login;
