"use client";

import { useEffect, useState } from "react";

type Question = {
  _id: string;
  question: string;
  choices: string[];
  answer: string;
  difficulty: string;
};

export default function MathQuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("/api/math-questions");
        const data = await res.json();
        setQuestions(data);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">📘 Math Questions</h1>

      {loading ? (
        <p>Loading...</p>
      ) : questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((q) => (
            <li key={q._id} className="border p-4 rounded-md shadow-sm">
              <h2 className="font-semibold text-lg">{q.question}</h2>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                {q.choices.map((choice, idx) => (
                  <li key={idx}>{choice}</li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-green-600">
                Answer: <strong>{q.answer}</strong> ({q.difficulty})
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}