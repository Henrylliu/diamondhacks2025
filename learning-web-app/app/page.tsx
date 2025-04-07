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
          Your personal space to explore math with flashcards, learning at your own pace
        </p>

        <ul className="list-disc pl-5 text-sm text-left">
          <li>Interactive flashcards</li>
          
          <li>Learn anywhere, anytime!</li>
          <li>Cute duck</li>
        </ul>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <Link href="/flashcards">
          <Image
            src="/images/diamond-duck-sticker.png"
            alt="Go to next page"
            width={100}
            height={100}
            className="hover:opacity-80 transition"
          />
        </Link>
        <p className="text-base text-blue-600 dark:text-gray-300">
          Click Dave the Duck to start learning!
        </p>
        </div>
    </main>
  );
}