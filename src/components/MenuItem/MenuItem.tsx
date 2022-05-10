import React from 'react';

export const MenuItem = ({ text, href }) => {
  
    return (
        <div>
            <a href={href}  className="text-base font-bold text-white hover:text-secondbrand"> {text} </a>
        </div>
    )
}