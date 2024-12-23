import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/SideBar/AppSB"
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

import './styles/globals.css';
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeBook",
  description: "Um website para gerenciar livros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="http://localhost:8097"></script>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Um site para gerenciar livros" />
        <title>Book Web</title>


        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />



      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <AdminPanelLayout>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          </ThemeProvider>
        </AdminPanelLayout>


        <footer></footer>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}