'use client';

import Link from "next/link"
import {useState } from "react";


function Hamburger(){
  return (
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  );
}

export default function Header(){
  const [menuState, setMenuState]:[string, Function] = useState('hidden');

  function toggleMenu(){
    setMenuState((ms:string)=>{
      return ms == 'hidden'?'block':'hidden';
    })
  }
  return (
    <header className="flex flex-row justify-between p-5 bg-red-100 items-center shadow-md">
      <a className="h-10 sm:h-14 w-10 sm:w-14">
        <img src="" alt="logo" width="100%" height="150px"/>
      </a>
      <nav className={`${menuState} absolute p-5 sm:p-0 top-0 left-0 sm:static sm:block w-full h-full sm:h-auto sm:w-auto bg-gray-300 sm:bg-transparent`}>
        <div className="flex justify-end">
          <svg className="sm:hidden block" width="40" height="40" stroke="black" strokeWidth={2} onClick={toggleMenu}>
            <line x1="5" y1="5" x2="30" y2="30" />
            <line x1="30" y1="5" x2="5" y2="30"/>
          </svg>
        </div>
        <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-20 align-middle text-center sm:visible">
          <li className=""><Link href="/">Home</Link></li>
          <li className=""><Link href="/about">About</Link></li>
          <li className=""><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="fill-black align-middle sm:hidden" onClick={toggleMenu}>
        <Hamburger />
      </div>
    </header>
  )
}