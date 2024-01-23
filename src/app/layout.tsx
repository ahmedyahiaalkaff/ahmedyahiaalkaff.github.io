import ClientNavbar from '@/components/ClientNavbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { EmailIcon, GithubIcon, Icon, LinkedinIcon } from '@/components/Icons'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Ahmed Alkaff',
  description: 'Ahmed Alkaff Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script id="theme" dangerouslySetInnerHTML={{__html: `
          (function(){
            if(localStorage.theme === 'dark' ||
              (!('theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)){
                document.documentElement.classList.add('dark')
              }else{
                document.documentElement.classList.remove('dark')
              }
          })()
        `}}>
        </script>
      </head>
      <body className='bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50'>
        <ThemeProvider>
          <ClientNavbar
            items={[
              {
                name: 'Home',
                href: '#home'
              },
              {
                name: 'About',
                href: '#about'
              },
              {
                name: 'Projects',
                href: '#projects'
              },
              {
                name: 'Contact',
                href: '#contact'
              },
            ]}
          />
        <main>
            {children}
        </main>
        </ThemeProvider>
        <footer className='flex flex-row justify-between items-center mt-5 mb-1 pr-5 pl-5'>
          <p>&copy; Ahmed Alkaff</p>
          <div className='flex mr-4 ml-4 gap-3'>
            <Link href="https://github.com/ahmedyahiaalkaff" target='_blank'><Icon width={'2rem'} height={'2rem'} IconComponent={GithubIcon}/></Link>
            <Link href="https://www.linkedin.com/in/ahmedalkaff/" target='_blank'><Icon width={'2rem'} height={'2rem'} IconComponent={LinkedinIcon}/></Link>
            <Link href="mailto:ahmedalkaff@yahoo.com" target='_blank'><Icon width={'2rem'} height={'2rem'} IconComponent={EmailIcon}/></Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
