import { useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen flex flex-col items-center justify-center`}>
      <h1 className="text-3xl font-bold mb-4">Theme Toggle</h1>
      <button onClick={() => setDark(!dark)} className="px-4 py-2 bg-blue-500 text-white rounded">
        {dark ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  );
}
