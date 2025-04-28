import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MySite</h1>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
        <ul className="hidden md:flex space-x-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {open && (
        <ul className="flex flex-col mt-4 md:hidden space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
}
