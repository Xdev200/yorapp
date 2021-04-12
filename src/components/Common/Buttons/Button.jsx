import React from 'react'
import  './button.css'
const Button = ({text,btnClass}) => {
    return (
        <>
            <button className={btnClass}>{text}</button>
        </>
    )
}

export default Button
