import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  Dashboard from './dashboard'
import Home from './landingpage'
import FullLandingPage from './fullLandingPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mtm project',
  description: 'Generated by team fab',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        < FullLandingPage />
        {/* <Home /> */}
        {/* <Dashboard /> */}
      </body>
    </html>
  )
}
