import {TextWithImage} from "../AboutUs/components/TextWithImage/TextWithImage";
import React from "react";
import {BlockBaseProps} from "~/App";
import cn from "classnames";

const url = 'https://uploads-ssl.webflow.com/623634729c194d6497a55433/623721bae0bb176347ecffd2_About-p-500.jpeg'
// https://uploads-ssl.webflow.com/623634729c194d6497a55433/623721b9ad218708ab048b6a_Team-p-500.jpeg
// https://uploads-ssl.webflow.com/623634729c194d6497a55433/62385e20954f4421c776bd7d_Image%3AAbout-Bg-T.png

export type AboutUsBlockProps = BlockBaseProps

const aboutUsTextsConfig = [
    {
        title: "What we do",
        content: "We utilize integrations with property management systems to ingest, clean, and structure real estate operating data, like rents and expenses, acting as the trusted intermediary layer between the raw data source and the end user."
    }, {
        title: "Who we serve",
        content: "We serve third party software companies and developers who are building tools for the commercial real estate industry. We also serve the IT and innovation departments of commercial real estate owners who are building internal tools for their acquisitions, asset management, and investor relations teams."
    }
]

const teamTextsConfig = [
    {
        title: "Business",
        content: "The business side of our team consists of former commercial real estate acquisitions, asset management, and investor relations professionals. We recognize that the future of the commercial real estate industry revolves around technological innovation and we want to be on the forefront of that revolution. Our business team comes from investment firms such as AEW, Blackstone, Angelo Gordon, Dune, Cadre, and more."
    }, {
        title: "Development",
        content: "The development side of our team consists of engineers, product managers, and designers who have helped create technological leaps in some of the world’s largest industries. We see the enormous inefficiencies in commercial real estate and are motivated by the opportunity to develop new technologies to bring the asset class into the modern era. Our development team comes from technology companies like Amazon, Square, Dropbox, Apple, and more."
    }
]

export const AboutUsBlock = ({contentClassName, wrapperClassName}: AboutUsBlockProps) => {
    const wrapperClassNameFull = cn("bg-aboutUsBg bg-cover", wrapperClassName)
    const contentClassNameFull = cn("flex gap-20 flex-col", contentClassName);

    return (
        <div className={wrapperClassNameFull}>
            <div className={contentClassNameFull}>
                <TextWithImage imageClassName={'bg-aboutUsImg1'} texts={aboutUsTextsConfig}/>
                <TextWithImage imageClassName={'bg-aboutUsImg2'} texts={teamTextsConfig} reversed/>
            </div>
        </div>
    )
}
