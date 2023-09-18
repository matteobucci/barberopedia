'use client'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import './globals.css';

import { Inter } from 'next/font/google';
import { ApolloWrapper } from './ApolloWrapper';
import { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

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


