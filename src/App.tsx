import React from 'react'
import {Header} from './components/Header/Header';
import {LeadingBlock} from './blocks/Leading/Leading';
import {TechStackBlock} from "./blocks/TechStack/TechStack";
import {StackItemsProps} from "./components";
import {AboutUsBlock} from "./blocks/AboutUs/AboutUs";

export interface BlockBaseProps {
    wrapperClassName: string,
    contentClassName: string
}

const menuItemsConfig = [
    {
        href: '#1',
        text: 'Home'
    }, {
        href: '#2',
        text: 'About'
    }, {
        href: '#3',
        text: 'Products'
    }, {
        href: '#4',
        text: 'Careers'
    }
];

const techStackItems: StackItemsProps[] = [
    {
        imageUrl: 'data:image/png;base64,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',
        text: 'Baremetrics'
    }, {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxS_o16pSYe3PL6A3t6D0RlDq33GTndI9yFQ&usqp=CAU',
        text: 'Mongo DB'
    }, {
        imageUrl: 'data:image/png;base64,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',
        text: 'Google Analytics'
    }, {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxucLSgsfnVhox8yydQVGq-stsHlzstBor6Q&usqp=CAU',
        text: 'Stripe'
    }, {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa96evbhuPMbXS7bK5E3dFeBF_nkB1SAw4zjm5mE6BOZ5Fuxy26b_nLYxw45O80MFTRg&usqp=CAU',
        text: 'Amazon'
    }, {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa96evbhuPMbXS7bK5E3dFeBF_nkB1SAw4zjm5mE6BOZ5Fuxy26b_nLYxw45O80MFTRg&usqp=CAU',
        text: 'Mixpanel'
    }, {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa96evbhuPMbXS7bK5E3dFeBF_nkB1SAw4zjm5mE6BOZ5Fuxy26b_nLYxw45O80MFTRg&usqp=CAU',
        text: 'DigitalOcean'
    }
]

const headerButtonConfig = {
    href: '#contactus',
    text: 'Contact Us'
}

const blockWrapperClassName = 'md:py-20 p-4 flex justify-center';
const blockContentClassName = 'max-w-7xl';

export function App() {
    return (
        <div className="bg-firstbrand">
            <Header menuItems={menuItemsConfig} button={headerButtonConfig} logoUrl={'#'}/>
            <LeadingBlock wrapperClassName={blockWrapperClassName} contentClassName={blockContentClassName}/>
            <TechStackBlock wrapperClassName={blockWrapperClassName} contentClassName={blockContentClassName} items={techStackItems}/>
            <AboutUsBlock wrapperClassName={blockWrapperClassName} contentClassName={blockContentClassName} />
        </div>
    )
}
