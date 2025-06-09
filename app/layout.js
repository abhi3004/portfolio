import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhijeet Pareek',
  description: 'Portfolio website for full stack dev Abhijeet Pareek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black-800 text-gray-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
