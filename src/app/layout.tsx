import './globals.css'
import { Inter, Lora } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata = {
  title: 'Writing Buddy',
  description: 'A modern, organizational writing and text manipulation tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}

