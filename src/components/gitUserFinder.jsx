import { useState } from 'react';

export default function GitHubFinder() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setUserData(data);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-6">GitHub User Finder</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={fetchUser} className="bg-black text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      {userData && (
        <div className="bg-white p-6 rounded shadow text-center">
          <img src={userData.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer" className="text-blue-500 underline">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
