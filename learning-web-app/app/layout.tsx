import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LearnHub",
  description: "A fun and interactive way to learn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Persistent Navbar */}
        <header className="flex justify-between items-center px-6 py-4 border-b border-black-600 dark:border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/diamond-duck-sticker.png"
              alt="Learning App Logo"
              width={40}
              height={40}
              className="dark:invert"
            />
            <span className="text-blue-600 text-lg font-semibold">Diamond Duck</span>
          </Link>

          <nav className="flex gap-6 text-sm sm:text-base font-medium">
            <Link href="/lessons" className="hover:underline hover:underline-offset-4">
              Lessons
            </Link>
            <Link href="/about" className="hover:underline hover:underline-offset-4">
              About
            </Link>
          </nav>
        </header>

        {/* Main content for every page */}
        <main className="flex-grow">{children}</main>

        {/* Footer for every page */}
        <footer className="text-center text-sm py-4 text-gray-500">
          Built with Next.js and ❤️
        </footer>
      </body>
    </html>
  );
}