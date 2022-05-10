import React from 'react';
import { Text, TextVariant } from '../Text';
import cn from 'classnames';

interface ButtonProps {
    text: string,
    onClick: VoidFunction,
    className?: string,
    fluid?: boolean,
}

export const Button = ({ text, onClick, className, fluid }: ButtonProps) => {

    const buttonClassName = cn('inline-flex items-center justify-center whitespace-nowrap rounded-3xl px-6 transform hover:transition-transform hover:scale-105 py-2 text-base font-bold text-white bg-gradient-to-r from-secondbrand to-thirdbrand', className, {
        'w-full': fluid,
        'w-min': !fluid
    })

    return (
        <a href="#" onClick={onClick} className={buttonClassName}> <Text text={text} variant={TextVariant.button} /> </a>
    )
}
