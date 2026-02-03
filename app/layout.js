import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist_mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prince | Full Stack Developer & Designer",
  description: "Full Stack Developer and Designer focused on creating beautiful, functional, and user-centered digital experiences. Building web applications, brand identities, and growth strategies.",
  keywords: "web developer, full stack developer, react developer, next.js developer, web designer, graphic designer, SEO, digital marketing, Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-neutral-950`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}