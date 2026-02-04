import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Product Filter App",
  description: "A product filtering and sorting application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  )
}
