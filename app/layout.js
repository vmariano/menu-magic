import '../styles/globals.css'

export const metadata = {
  title: 'Menu Magic',
  description: '5-day meal planning application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
