import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Learning App Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold text-center sm:text-left">
          Welcome to Your Learning App!
        </h1>

        <ul className="list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] pl-5">
          <li className="mb-2 tracking-[-.01em]">Interactive lessons and quizzes</li>
          <li className="mb-2 tracking-[-.01em]">Track your learning progress</li>
          <li className="tracking-[-.01em]">Learn at your own pace</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/lessons"
          >
            📚 Start Learning
          </a>
          <a
            className="rounded-full border border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/progress"
          >
            📈 View Progress
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-center">
        <span>Built with Next.js and ❤️</span>
      </footer>
    </div>
  );
}