import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/diamond-duck-sticker.png"
            alt="Learning App Logo"
            width={40}
            height={40}
            className="dark:invert"
          />
          <span className="text-lg font-semibold">Diamond Duck</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm sm:text-base font-medium">
          <Link href="/lessons" className="hover:underline hover:underline-offset-4">
            Lessons
          </Link>
          <Link href="/learn" className="hover:underline hover:underline-offset-4">
            Learn
          </Link>
          <Link href="/about" className="hover:underline hover:underline-offset-4">
            About
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow grid place-items-center px-8 py-20 sm:px-20">
        <div className="flex flex-col gap-10 items-center text-center sm:text-left sm:items-start max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Welcome to Diamond Duck! 🦆
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Your personal space to explore interactive lessons, track progress, and learn at your own pace.
          </p>

          <ul className="list-disc pl-5 text-sm text-left">
            <li>Interactive lessons and quizzes</li>
            <li>Progress tracking and achievements</li>
            <li>Learn anywhere, anytime</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/lessons"
              className="bg-black text-white px-5 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-neutral-800 transition"
            >
              📚 Start Learning
            </Link>
            <Link
              href="/progress"
              className="border border-gray-300 dark:border-gray-600 px-5 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            >
              📈 View Progress
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-4 text-gray-500">
        Built with Next.js and ❤️
      </footer>
    </div>
  );
}