import {Text, TextVariant} from "../../../../components";
import React from "react";
import {TextWithTitle} from "../TextWithTitle/TextWithTitle";
import cn from "classnames";

interface TextWithImageItem {
    title: string,
    content: string
}

interface TextWithImageProps {
    imageClassName: string,
    reversed?: boolean,
    texts: TextWithImageItem[]
}

export const TextWithImage = ({imageClassName, reversed, texts}: TextWithImageProps) => {
    const imageClassNameFull = cn("rounded-full w-60 h-60 round bg-aboutUsImg1 bg-cover flex-shrink-0", imageClassName);
    const wrapperClassName = cn("flex gap-10 flex-col md:flex-row", {
        'md:flex-row-reverse': reversed
    })

    return (
        <div className={wrapperClassName}>
            <div>
                <Text className={"mb-6"} text={"About Intelas"} variant={TextVariant.head2}/>
                {
                    texts.map(({title, content}) => (
                        <TextWithTitle title={title} content={content}/>
                    ))
                }
            </div>
            <div className={imageClassNameFull}/>
        </div>
    )
}
