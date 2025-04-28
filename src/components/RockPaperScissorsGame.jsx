import { useState } from 'react';

export default function RockPaperScissors() {
  const choices = ['rock', 'paper', 'scissors'];
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const play = (choice) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(computer);
    determineWinner(choice, computer);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('Draw');
    } else if ((user === 'rock' && computer === 'scissors') || (user === 'paper' && computer === 'rock') || (user === 'scissors' && computer === 'paper')) {
      setResult('You Win!');
    } else {
      setResult('You Lose!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Rock Paper Scissors</h1>
      <div className="flex space-x-4 mb-4">
        {choices.map((choice) => (
          <button key={choice} onClick={() => play(choice)} className="bg-blue-500 text-white px-4 py-2 rounded">{choice}</button>
        ))}
      </div>
      <div className="text-lg">You: {userChoice} - Computer: {computerChoice}</div>
      <div className="text-xl font-bold mt-4">{result}</div>
    </div>
  );
}
