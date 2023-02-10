import './globals.css'
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: "--font-montserrat", 
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} bg-black text-white mx-32 my-12`}>
        <nav className='my-0 mb-8'>
          <div className='text-3xl text-center text-yellow-600'>THE MOVIE DATABASE MOST POPULAR FILMS</div>
        </nav>
        {children}
        </body>
    </html>
  )
}
