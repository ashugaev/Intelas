import React from 'react'
import { Button } from './components/Button';
import {Header} from './components/Header';
import { MenuItem } from './components/MenuItem/MenuItem';

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

const headerButtonConfig = {
  href: '#contactus',
  text: 'Contact Us'
}

/*
menuItems = [{
  href: '#lol',
  text: 'menuel one',
};

<Header logoUrl={'https/kekek.ru'} menuItems={menuItems} button={{href, text}}>
<MenuItem href={text} text={text} >

<Button text={text} onClick={() => {} variant={}}>

<div>
  <Logo>
  menuItems.map(() => (
    <MenuItem>
  ))
  <Button>
<div>

src
  components
    Button - Anna
    Header - Alek
      MenuItem - Anna
  blocks
    Loading
    TechStack
    AboutUs
*/

export function App() {
  return (
    <>
    {/* 
         <Header/>
         <Block>
           <Leading>
         </Block>
         <Block>
           <TechStack>
         </Block>
         <Block>
           <AboutUs>
         </Block>
       */}
    <Header menuItems={menuItemsConfig} button={headerButtonConfig} logoUrl={'#'} />
    </>
  )
}
