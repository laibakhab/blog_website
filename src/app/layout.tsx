import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Colorful UI',
  description: 'A website with a colorful and dynamic header',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}