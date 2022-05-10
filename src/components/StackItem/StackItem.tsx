import React from 'react'
import {Text, TextVariant} from "../Text"

export interface StackItemsProps {
    imageUrl: string,
    text: string
}

export const StackItem = ({imageUrl, text}: StackItemsProps) => {
    return (
        <div className={"flex flex-col gap-4 items-center"}>
            <img className={"h-20 w-20 rounded-xl"} src={imageUrl}/>
            <Text text={text} variant={TextVariant.body2}/>
        </div>
    )
}
