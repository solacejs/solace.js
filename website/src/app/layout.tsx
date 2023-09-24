"use client";
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { SidebarContext, SidebarProvider } from '@/components/SidebarContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Solace.js</title>
      </head>
      <body className={inter.className = "w-screen h-screen"}>
        <ThemeProvider>
          <SidebarProvider>
            <div className='bg-background text-foreground w-full h-full'>
              <Navbar />
              <div className='w-full h-[calc(100%-4rem)] fixed mt-[4rem] overflow-auto'>
                {children}
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}
