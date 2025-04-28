import { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2"
  },
  {
    question: "What planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "In which year did World War II end?",
    options: ["1942", "1945", "1939", "1950"],
    answer: "1945"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: "Au"
  },
  {
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Spain", "Italy", "Greece"],
    answer: "Italy"
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Carbon Dioxide"
  },
  {
    question: "What is the hardest natural substance?",
    options: ["Iron", "Diamond", "Gold", "Silver"],
    answer: "Diamond"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["Italy", "France", "Germany", "Spain"],
    answer: "France"
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon River", "Yangtze River", "Nile River", "Mississippi River"],
    answer: "Nile River"
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
    answer: "Hydrogen"
  },
  {
    question: "In which sport is the term 'love' used?",
    options: ["Football", "Cricket", "Tennis", "Basketball"],
    answer: "Tennis"
  },
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    answer: "Portuguese"
  },
  {
    question: "Which organ in the human body pumps blood?",
    options: ["Liver", "Heart", "Kidneys", "Lungs"],
    answer: "Heart"
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    answer: "Albert Einstein"
  }
];

export default function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[index].answer) {
      setScore(score + 1);
    }
    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-4">
      {showScore ? (
        <h1 className="text-3xl font-bold">Your Score: {score}/{questions.length}</h1>
      ) : (
        <>
          <h2 className="text-2xl mb-4">{questions[index].question}</h2>
          <div className="flex flex-col space-y-2">
            {questions[index].options.map((opt) => (
              <button key={opt} className="bg-blue-500 text-white p-2 rounded" onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
