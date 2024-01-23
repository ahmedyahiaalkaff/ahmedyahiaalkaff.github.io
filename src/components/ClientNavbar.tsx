'use client';

import {Navbar, type NavbarProps, type Item} from '@ahmedalkaff/react-responsive-navbar';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import Switch from './Switch';
import { useThemeContext } from '@/contexts/ThemeContext';
import Link from 'next/link';
import { DarkIcon, LightIcon, Icon, UpArrowIcon } from './Icons';
import { scrollToSection } from '@/lib/util';
import MyLink from './MyLink';

export default function ClientNavbar(props:NavbarProps){

  // const [isDarkMode, setIsDarkMode] = useState(null);
  const {theme, setTheme} = useThemeContext();
  const loadingBar = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dm = e.target.checked;
    if(dm){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  useEffect(()=>{
    if(document.documentElement.classList.contains('dark')){
      setTheme('dark');
    }else{
      setTheme('light');
    }
    loadingBar.current?.classList.remove('animate-pulse')
  }, [setTheme]);

  useEffect(() => {
    const handleScroll = () => {
      if(topRef.current){
        if(window.scrollY > 800){
          topRef.current.style.visibility = 'visible';
        }else{
          topRef.current.style.visibility = 'hidden';
        }
      }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const handleItemClick = (e: React.MouseEvent<Element>, item: Item) => {
    e.preventDefault();
    scrollToSection(item.href);
  }

  return (
    <>
      <div className='sticky top-0 w-full h-2 bg-primary animate-pulse z-50' ref={loadingBar}></div>
      <Navbar {...props} otherElement=
        { theme ?
          <div className='flex items-center justify-center sm:mr-20'>
            <Switch
              afterIcon={<Icon width={'1.5rem'} height={'1.5rem'} IconComponent={DarkIcon}/>}
              beforeIcon={<Icon width={'2rem'} height={'2rem'} IconComponent={LightIcon}/>}
              onChange={handleChange}
              checked={theme === 'dark'}
            />
          </div>
          :
          <></>
        }
        hamburgerClassName='dark:fill-white'
        renderItem={(item) => {
          return (
            <MyLink href={item.href}
              onClick={(e)=>handleItemClick(e, item)}
              name={item.name}/>
          )
        }}
        navClassName='bg-gray-400 dark:bg-gray-700 sm:bg-transparent sm:dark:bg-transparent text-black dark:text-white border-b-2 sm:border-b-0'
        containerClassName='sticky top-2 bg-slate-50 dark:bg-slate-950 z-50 shadow-lg shadow-slate-950 dark:shadow-gray-400'
      />
      <div
        className='fixed bottom-10 right-5 cursor-pointer
                   border border-primary rounded-full
                   p-4 bg-slate-50 dark:bg-slate-950'
        style={{visibility: 'hidden'}}
        ref={topRef}
        onClick={()=>scrollToSection('#home')}
      >
        <Icon IconComponent={UpArrowIcon} width={'30px'} height={'30px'}/>
      </div>
    </>
  );
}