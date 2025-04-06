import Image from "next/image";
import Link from "next/link";
import "./page.css";

const lessons = [
  {
    id: "kindergarten",
    title: "Kindergarten Math",
    description: "Learn the basics of addition, including simple sums and number bonds.",
    gradeLevel: "Kindergarten", 
  },
  {
    id: "first-grade",
    title: "First Grade Math",
    description: "Understand subtraction with small numbers and practice simple subtraction problems.",
    gradeLevel: "1st grade",
  },
  {
    id: "second-grade",
    title: "Second Grade Math",
    description: "Learn the multiplication tables from 1 to 12 for quick recall.",
    gradeLevel: "2nd grade"
  },
  {
    id: "third-grade",
    title: "Third Grade Math",
    description: "Introduction to fractions, area, and perimeter",
    gradeLevel: "3rd grade"
  },
  {
    id: "fourth-grade",
    title: "Fourth Grade Math",
    description: "Learn about number theory and systems",
    gradeLevel: "4th grade"
  },
  {
    id: "fifth-grade",
    title: "Fifth Grade Math",
    description: "Learn about place value in decimals, including tenths, hundredths, and thousandths.",
    gradeLevel: "5th grade",
  },
  {
    id: "sixth-grade",
    title: "Sixth Grade Math",
    description: "Learn about geometric shapes, including triangles, squares, and circles, and their properties.",
    gradeLevel: "6th grade", // 5th grade math lesson
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