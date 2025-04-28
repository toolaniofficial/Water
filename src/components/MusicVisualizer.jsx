export default function MusicVisualizer() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex space-x-2">
          {Array(10).fill(0).map((_, idx) => (
            <div key={idx} className="w-2 bg-green-400 animate-bounce" style={{ animationDelay: `${idx * 0.2}s`, height: '50px' }}></div>
          ))}
        </div>
      </div>
    );
  }
  