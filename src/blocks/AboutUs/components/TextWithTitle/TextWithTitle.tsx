import {Text, TextVariant} from "../../../../components";
import React from "react";

export interface TextWithTitleProps {
    title: string,
    content: string
}

export const TextWithTitle = ({title, content}: TextWithTitleProps) => {
    return (
        <div className={'flex flex-col gap-2'}>
            <Text text={title} variant={TextVariant.head3}/>
            <Text
                text={content}
                variant={TextVariant.body3}
            />
        </div>
    )
}
