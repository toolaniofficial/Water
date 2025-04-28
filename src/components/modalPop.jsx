import { useState } from 'react';

export default function ModalPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">Open Modal</button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Modal Content</h2>
            <p className="mb-4">This is a simple modal popup.</p>
            <button onClick={() => setOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
