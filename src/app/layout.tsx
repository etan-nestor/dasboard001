import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NutriTrack Pro',
  description: 'Dashboard professionnel de gestion alimentaire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-[#0A0F1A]`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}