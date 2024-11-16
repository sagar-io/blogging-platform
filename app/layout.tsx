import { Caprasimo } from 'next/font/google'
import "./globals.css"

const caprasimo = Caprasimo({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

const RootLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <html lang="en" className={caprasimo.className}>
            <head>
                <title>Blogging Site</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;