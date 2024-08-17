"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {dark} from '@clerk/themes'
import Loading from "@/app/loading";

// react-query
const queryClient = new QueryClient();

const AppProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider   appearance={{
      baseTheme: [dark],
    }}>
      <ClerkLoading>
        <Loading />
      </ClerkLoading>
      <ClerkLoaded>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemesProvider>
        </QueryClientProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default AppProviders;
