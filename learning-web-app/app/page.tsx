import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow grid place-items-center px-8 py-20 sm:px-20">
      <div className="flex flex-col gap-10 items-center text-center sm:text-left sm:items-start max-w-xl">
        <h1 className="text-3xl sm:text-4xl text-blue-600 font-bold">
          Welcome to Diamond Duck! 🦆
        </h1>

        <p className="text-base text-black-600 dark:text-gray-300">
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
            className="bg-blue-600 text-blue-100 px-4 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-100 transition"
          >
            📚 Start Learning
          </Link>
          <Link
            href="/progress"
            className="text-blue-600 border border-blue-600 dark:border-gray-600 px-4 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-600 dark:hover:bg-neutral-800 transition"
          >
            📈 View Progress
          </Link>
        </div>
      </div>
    </main>
  );
}