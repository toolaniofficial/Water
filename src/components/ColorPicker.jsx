import { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#000000');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-32 h-32 rounded-full shadow-lg"
      />
      <p className="text-xl font-bold mt-4">{color}</p>
    </div>
  );
}
