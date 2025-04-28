import { useState } from 'react';

const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400'
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const prevImage = () => setIndex((index - 1 + images.length) % images.length);
  const nextImage = () => setIndex((index + 1) % images.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="relative w-96 h-64">
        <img src={images[index]} alt="Slide" className="rounded shadow-lg w-full h-full object-cover" />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-2 rounded-full">⬅️</button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-2 rounded-full">➡️</button>
        </div>
      </div>
    </div>
  );
}
