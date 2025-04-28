import { useState } from 'react';

export default function BlogCMS() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([{ title, content }, ...posts]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Content"
          className="w-full p-2 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Post</button>
      </form>

      <div className="space-y-4">
        {posts.map((post, idx) => (
          <div key={idx} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
