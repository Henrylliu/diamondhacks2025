"use client";

import { useEffect, useState } from "react";

type Question = {
  _id: string;
  question: string;
  choices: string[];
  answer: string;
  difficulty?: string;
};

function shuffleArray(array: Question[]): Question[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function FlashcardGame() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch("/api/math-questions");
      const data = await res.json();
      setQuestions(shuffleArray(data));
    };
    fetchQuestions();
  }, []);

  const current = questions[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">🎯 Flashcard Quiz</h1>
      <p className="mb-4 text-gray-500">Question {currentIndex + 1} / {questions.length}</p>

      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-6 text-center">{current.question}</h2>
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Show Answer
              </button>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="text-blue-600 font-medium text-lg text-center">
                  Answer: {current.answer}
                </div>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-black text-white rounded-full hover:bg-neutral-800"
                >
                  Next Card →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}