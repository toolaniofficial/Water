import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    alert(`File "${file.name}" selected!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-200">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      {file && <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>}
    </div>
  );
}
