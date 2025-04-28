import { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { auth } from './firebase';
import { signOut } from "firebase/auth";

const db = getFirestore();

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'messages'), {
      text: message,
      createdAt: serverTimestamp()
    });
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-100">
      <button onClick={() => signOut(auth)} className="self-end mb-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      <div className="flex-1 overflow-auto">
        {messages.map((msg, i) => (
          <p key={i} className="p-2 bg-white mb-2 rounded">{msg.text}</p>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex mt-4">
        <input value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 p-2 border rounded-l" placeholder="Type a message" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">Send</button>
      </form>
    </div>
  );
}
