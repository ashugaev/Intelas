import React from 'react';
const cn = require('classnames');

export const Button = ({ text, onClick, className }) => {
  
    const buttonClassName = cn(className, 'inline-flex items-center justify-center whitespace-nowrap rounded-3xl px-6 py-2 text-base font-bold text-white bg-gradient-to-r from-secondbrand to-thirdbrand', {
        // 'text-base font-bold text-white hover:text-secondbrand': variant === TextVariant.link1,
    })

    console.log('buttonClassName');
    
    return (
        <div>
            <a href="#" onClick={onClick} className={buttonClassName}> {text} </a>
        </div>
    )
}