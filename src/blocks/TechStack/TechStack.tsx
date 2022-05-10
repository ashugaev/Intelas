import React from 'react'
import {TextVariant, Text, StackItem, StackItemsProps} from "../../components";

interface TechStackProps {
    items: StackItemsProps[]
}

export const TechStackBlock = ({items}: TechStackProps) => {
    return (
        <div className={"md:py-20 p-10 flex flex-col justify-center max-w-7xl m-auto"}>
            <Text text={"Scalable and Secure Tech Stack"} variant={TextVariant.head3} className={"text-center"}/>
            <div className={"flex flex-wrap justify-center gap-10 mt-10"}>
            {items.map(({imageUrl, text}) => (
                <StackItem imageUrl={imageUrl} text={text}/>
            ))}
            </div>
        </div>
    )
}
