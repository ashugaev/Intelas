import React from 'react';
import cn from 'classnames';

export enum TextVariant {
    head1 = 'head1',
    head2 = 'head2',
    head3 = 'head3',
    body1 = 'body1',
    body2 = 'body2',
    body3 = 'body3',
    link = 'link',
    button = 'button'
}

interface TextProps {
    text: string,
    variant: TextVariant,
    className?: string
}

const specialTagByVariant = {
    h1: [TextVariant.head1],
    h2: [TextVariant.head2],
    h3: [TextVariant.head3]
};

export const Text = ({text, variant, className}: TextProps) => {
    const textClassName = cn(className, {
        'text-base font-bold text-white hover:text-secondbrand': variant === TextVariant.link,
        'text-base font-bold text-white': variant === TextVariant.button,
        'text-6xl font-bold text-white': variant === TextVariant.head1,
        'text-4xl font-bold text-white': variant === TextVariant.head2,
        'text-2xl font-bold text-secondbrand': variant === TextVariant.head3,
        'text-xl font-normal text-white': variant === TextVariant.body1,
        'text-base font-normal text-white': variant === TextVariant.body2,
        'text-sm font-normal text-white': variant === TextVariant.body3,
    })

    if (specialTagByVariant.h1.includes(variant)) {
        return (
            <h1 className={textClassName}> {text} </h1>
        )
    } else if (specialTagByVariant.h2.includes(variant)) {
        return (
            <h2 className={textClassName}> {text} </h2>
        )
    } else if (specialTagByVariant.h3.includes(variant)) {
        return (
            <h3 className={textClassName}> {text} </h3>
        )
    }

    return (
        <p className={textClassName}> {text} </p>
    )
}
