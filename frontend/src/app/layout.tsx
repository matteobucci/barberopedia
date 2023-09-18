'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from './context/AuthContext'
import { ApolloWrapper } from './ApolloWrapper'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <ApolloWrapper token=''>{children}</ApolloWrapper>
      </body>
      {/* <AuthContextProvider>
        </AuthContextProvider> */}
    </html>
  )
}


