import classNames from "classnames"
import React, { useState } from "react"
import {MenuItem} from '../MenuItem'
import {Button} from '../Button'

export const Header = ({
    menuItems,
    logoUrl,
    button,
}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="relative bg-firstbrand">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between py-6 md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href={logoUrl}>
                    <img className="h-8 w-auto sm:h-10" src="https://uploads-ssl.webflow.com/623634729c194d6497a55433/62385b3d4f5113138af0e3b7_Intelas-Logo.svg" alt="" />
                    </a>
                </div>
                <div className="-my-2 -mr-2 md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex ring-0 items-center focus:outline-none justify-center bg-transparent p-2 text-white hover:text-secondbrand" aria-expanded="false">
                    <span className="sr-only">Open menu</span>
                    {menuOpen ? (
                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                    ) : (
                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                        </button>
                        </div>
                        <nav className="hidden space-x-10 md:flex items-center">
                            {menuItems.map(({href, text}, i) => (
                                <MenuItem href={href} text={text}/>
                            ))}
                            <Button text={'Contact Us'} onClick={() => window.location.href = '#lol'}/>                          
                        </nav>
                        </div>
                    </div>
            
            
                      {menuOpen && (  
                            <nav className="grid gap-y-8 px-5 pt-5 pb-6 bg-fourthbrand  md:hidden">
                                {menuItems.map(({href, text}, i) => (
                                    <MenuItem href={href} text={text}/>
                                ))}

                                <Button text={button.text} onClick={() => window.location.href = button.href} className={'w-full'}/>
                            </nav>
                        )}
                    </div>
                </div>
    )
}