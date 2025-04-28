export default function MusicPlayer() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-pink-600 p-6 text-white">
        <h1 className="text-3xl font-bold mb-6">Music Player</h1>
        <div className="bg-white rounded-full p-6 shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Album Cover" className="rounded-full" />
        </div>
        <p className="text-xl mt-4 font-semibold">Song Title</p>
        <p className="text-md">Artist Name</p>
        <div className="flex space-x-6 mt-6">
          <button className="p-4 bg-pink-500 rounded-full">⏮️</button>
          <button className="p-4 bg-pink-700 rounded-full">▶️</button>
          <button className="p-4 bg-pink-500 rounded-full">⏭️</button>
        </div>
      </div>
    );
  }
  