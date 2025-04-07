import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-600">About Diamond Duck!</h1>
      
      <section className="max-w-3xl text-center sm:text-left mb-8">
        <p className="text-xl text-black-600 dark:text-gray-300">
          Diamond Duck is an interactive learning platform designed to help grade school
          students study and improve in the subject of mathematics.
        </p>
      </section>

      <section className = "max-w-3xl text-center sm:text-center mb-6">
      <div className="my-2">
          <Image 
            src="/images/diamond-duck-sticker.png" 
            alt="Diamond Duck Logo" 
            width={100} 
            height={100} 
            className="mx-auto" 
          />
      </div>
      <p className="text-xs sm:text-sm text-center text-blue-600 dark:text-gray-300">
          (Our mascot Dave the Duck!)
      </p>
      </section>
      
      <section className="max-w-3xl text-center sm:text-left mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4 font-sans">How It Works!</h2>
        <p className="text-base text-black-600 dark:text-gray-300">
          Getting started with Diamond Duck is simple! You don't need to create an account,
          just click flashcards or the duck in the middle of home and start answering questions!
          We designed our website to be easily accessible for young students so they
          can feel encouraged to continue learning.
        </p>
      </section>

      <section className="max-w-3xl text-center sm:text-left mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">Our Team!</h2>
        <p className="text-base text-black-600 dark:text-gray-300">
          Diamond Duck was built by Kyle, Henry, Sam, and Celine, four passionate college students, who want to make the learning
          experience for grade schoolers more enjoyable and engaging.
        </p>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-300">
        <p>Built with ❤️ by Diamond Duck Team. All rights reserved.</p>
      </footer>
    </div>
  );
}