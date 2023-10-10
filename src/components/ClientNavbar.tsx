'use client';

import {Navbar, NavbarProps} from '@ahmedalkaff/react-responsive-navbar';
import '@ahmedalkaff/react-responsive-navbar/dist/styles.css';


export default function ClientNavbar(props:NavbarProps){
  return <Navbar {...props}/>;
}