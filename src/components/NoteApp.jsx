import { useState } from 'react';

export default function NotesApp() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() !== '') {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-yellow-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Notes</h1>
      <div className="flex space-x-2 mb-4">
        <input
          className="border p-2 rounded"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addNote}>Add</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {notes.map((n, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
