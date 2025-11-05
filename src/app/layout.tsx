import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/contexts/theme'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import './globals.css'
import ScrollTop from '@/components/ScrollTop/ScrollTop'


const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Mi Portfolio',
  description: 'Portfolio personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.className = savedTheme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <div id="top">
            <Header />
            <main>{children}</main>
            <ScrollTop />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}