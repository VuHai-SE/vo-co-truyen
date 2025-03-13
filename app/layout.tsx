import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Võ Cổ Truyền Việt Nam - Di sản võ thuật dân tộc hơn 2000 năm",
  description: "Trang web chính thức của Liên Đoàn Võ Cổ Truyền Thành Phố Hồ Chí Minh",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MainNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

