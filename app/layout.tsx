export const metadata = {
  title: 'Captain Cave Yachts',
  description: 'Luxury Private Speed Boat Charter in Fethiye',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ position: "absolute", top: 20, right: 40 }}>
          <a href="/" style={{ marginRight: 10 }}>EN</a>
          <a href="/?lang=ru">RU</a>
        </nav>

        {children}
      </body>
    </html>
  )
}