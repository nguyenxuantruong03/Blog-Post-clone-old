import './globals.css'
import { Inter } from 'next/font/google'
import Myprofile from './components/Myprofile'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Xuan Truong Blog',
  description: 'Created by Xuan Truong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-500 '>
        <Navbar />
        <Myprofile />
        {children}
        </body>
    </html>
  )
}
