// app/layout.tsx

import { Icon } from "lucide-react";
import "./globals.css"; // this includes your Tailwind setup
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mastery Sound Studio",
  description: "sound production studio website",
  keywords: "sound, production, studio, music, audio",
   icons: {
    icon: '/logo.png', // Ensure this path is correct
    shortcut: '/logo.png', 
    apple: '/logopng',
    other: {
      rel: 'icon',
      url: '/logo.png',
      type: 'image/png',
      sizes: '32x32',
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-black`}>
        {children}
      </body>
    </html>
  );
}
