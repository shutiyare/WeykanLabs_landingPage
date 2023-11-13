import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weykan Labs',
  description: 'Building technologies and conducting research on high-impact social issues',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>

          <title rel="icon" href="/favicon.ico" ></title>
        </Head>
        {children}</body>
    </html>
  )
}
