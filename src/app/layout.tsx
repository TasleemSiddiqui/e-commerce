import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Providers from "@/components/providers";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poshak-e-Chaman",
  description: "Generated by Muhammad Tasleem",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      
        <body className={`${inter.className}`}>
          <Providers>
            <div className="max-w-screen-2xl mx-auto">
            
              <div className="max-w-screen-2xl mx-auto pr-5 py-2 flex w-full flex-row-reverse "></div>
              <Navbar />
              {children}
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
