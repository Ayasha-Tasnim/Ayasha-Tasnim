import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayasha Tasnim | Senior Developer Portfolio",
  description: "Personal portfolio of Ayasha Tasnim - Computer Science Student, Aspiring Software Engineer & Web Developer. Skilled in React, Next.js, and Full-Stack Development.",
  keywords: ["Ayasha Tasnim", "Ayasha", "Software Engineer", "Web Developer", "React Developer", "Next.js", "Portfolio"],
  authors: [{ name: "Ayasha Tasnim" }],
  creator: "Ayasha Tasnim",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#050816] text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
