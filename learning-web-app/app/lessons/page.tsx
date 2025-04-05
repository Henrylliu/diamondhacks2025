import Image from "next/image";
import Link from "next/link";

const lessons = [
  {
    id: "intro-to-js",
    title: "Intro to JavaScript",
    description: "Learn the basics of JavaScript, including variables, functions, and loops.",
  },
  {
    id: "html-basics",
    title: "HTML Basics",
    description: "Understand the structure of web pages with HTML tags and elements.",
  },
  {
    id: "css-styling",
    title: "CSS Styling",
    description: "Style your web pages using CSS selectors, flexbox, and grid.",
  },
];



export default function LessonsPage() {
  return (
    <div className="min-h-screen px-6 py-10 sm:px-20">
      <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">📚 Lessons</h1>

      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {lesson.description}
            </p>
            <Link
              href={`/lessons/${lesson.id}`}
              className="inline-block px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-neutral-800 transition"
            >
              Start
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}