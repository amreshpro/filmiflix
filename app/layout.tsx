import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "FilmiFlix",
  description: "A movie and TV Series web app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased",fontSans.variable)}>
        
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
        
        </body>
    </html>
  );
}
