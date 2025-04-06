import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diamond Duck",
  description: "A learning web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/diamond-duck-sticker.png"
              alt="Diamond Duck Logo"
              width={40}
              height={40}
              className="dark:invert"
            />

            <h1 className="text-xl font-bold">Diamond Duck</h1>
          </div>
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/flashcards">Flashcards</Link>
            <Link href="/about">About</Link>

          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}