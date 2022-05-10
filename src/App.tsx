import React from 'react'
import {Header} from './components/Header';
import {LeadingBlock} from './blocks/Leading/Leading';
import {TechStackBlock} from "./blocks/TechStack";
import {StackItemsProps} from "~/components";

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
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa96evbhuPMbXS7bK5E3dFeBF_nkB1SAw4zjm5mE6BOZ5Fuxy26b_nLYxw45O80MFTRg&usqp=CAU',
        text: 'Baremetrics'
    }, {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa96evbhuPMbXS7bK5E3dFeBF_nkB1SAw4zjm5mE6BOZ5Fuxy26b_nLYxw45O80MFTRg&usqp=CAU',
        text: 'Mongo DB'
    }, {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa96evbhuPMbXS7bK5E3dFeBF_nkB1SAw4zjm5mE6BOZ5Fuxy26b_nLYxw45O80MFTRg&usqp=CAU',
        text: 'Google Analytics'
    }, {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa96evbhuPMbXS7bK5E3dFeBF_nkB1SAw4zjm5mE6BOZ5Fuxy26b_nLYxw45O80MFTRg&usqp=CAU',
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

export function App() {
    return (
        <div className="bg-firstbrand">
            <Header menuItems={menuItemsConfig} button={headerButtonConfig} logoUrl={'#'}/>
            <LeadingBlock className=''/>
            <TechStackBlock className={''} items={techStackItems}/>
            {/*<AboutUsBlock className={''} />*/}
        </div>
    )
}
