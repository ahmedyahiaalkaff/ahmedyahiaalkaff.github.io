import ClientNavbar from '@/components/ClientNavbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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

  function toggleMenu(){

  }

  return (
    <html lang="en">
      <body className="min-h-screen">
        <ClientNavbar logo="/next.svg"/>
        <main className="mt-5">
          {children}
        </main>
        <footer className='mt-5'>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  )
}
