import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./theme-config.css";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import NavBar from "./NavBar";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import QueryClientProvider from "./issues/QueryClientProvider";
import AuthProvider from "./auth/Provider";
const inter = Inter({
  subsets: ["latin"],
  variable: "--front-inter",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider>
          <AuthProvider>
            <Theme>
              <NavBar />
              <main className="p-5 ">
                {" "}
                <Container>{children}</Container>
              </main>
              <ThemePanel />
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
