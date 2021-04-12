import React from 'react'
import Button from '../Common/Buttons/Button'
import styles from '../../styles/otp.module.css'
const Otp = () => {
    return (
        <div className={styles.otp}>
            <span>Verify OTP</span>
            <span>Enter the OTP sent to 8884966267</span>
            <div className={styles.otp_input}>
                {/* maxLength support by type tel not number so used tel */}
                <input type='tel' maxLength="1"/>
                <input type='tel' maxLength="1"/>
                <input type='tel' maxLength="1"/>
                <input type='tel' maxLength="1"/>
            </div>
            <span className={styles.time}>00:00</span>
            <Button text='RESEND OTP' btnClass="btn btn_primary"/>
            <Button text='PROCEED' btnClass="btn btn_disable"/>
        </div>
    )
}

export default Otp
