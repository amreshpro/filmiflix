import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";


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
    <ClerkProvider>

    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased",fontSans.variable)}>
   
      <NextThemesProvider attribute="class" defaultTheme="dark">
       <Navbar/>
        {children}
      </NextThemesProvider>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
