import { useState } from 'react';
import { marked } from 'marked'; // install 'marked' via npm

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('# Hello Markdown!');

  return (
    <div className="flex flex-col md:flex-row p-6 min-h-screen bg-gray-100">
      <textarea
        className="w-full md:w-1/2 h-96 p-4 border rounded resize-none"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="w-full md:w-1/2 h-96 p-4 border rounded overflow-auto bg-white"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}
