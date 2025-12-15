import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";

import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
      subsets: ['latin'], // Specify the desired subsets
      display: 'swap', // Control font loading behavior
    });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <body
        className={`${robotoMono.className} bg-black text-green-300 font-mono text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
