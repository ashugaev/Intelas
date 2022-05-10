import React from 'react'
import {StackItem, StackItemsProps, Text, TextVariant} from "../../components";
import {BlockBaseProps} from "~/App";
import cn from "classnames";

interface TechStackProps extends BlockBaseProps {
    items: StackItemsProps[]
}

export const TechStackBlock = ({items, contentClassName, wrapperClassName}: TechStackProps) => {
    const wrapperClassNameFull = cn("bg-fourthbrand", wrapperClassName)
    const contentClassNameFull = cn("w-full flex flex-col justify-center max-w-7xl m-auto", contentClassName);

    return (
        <div className={wrapperClassNameFull}>
            <div className={contentClassNameFull}>
                <Text text={"Scalable and Secure Tech Stack"} variant={TextVariant.head3} className={"text-center"}/>
                <div className={"flex flex-wrap justify-center gap-10 mt-10"}>
                    {items.map(({imageUrl, text}, i) => (
                        <StackItem key={i} imageUrl={imageUrl} text={text}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
