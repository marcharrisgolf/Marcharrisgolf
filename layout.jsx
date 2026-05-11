export const metadata = {
  title: 'Marc Harris Golf',
  description: 'Worldwide Online Golf Coaching',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}