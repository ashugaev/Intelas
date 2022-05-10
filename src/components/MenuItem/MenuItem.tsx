import React from 'react';

interface MenuItemProps {
    text: string
    href: string
}

export const MenuItem = ({text, href}: MenuItemProps) => {

    return (
        <div>
            <a href={href} className="text-base font-bold text-white hover:text-secondbrand"> {text} </a>
        </div>
    )
}
