import './globals.css'

import { Navbar,Footer } from '@/components'
export const metadata = {
  title: 'The Car Hub',
  description: 'Find the best cars in your locality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
