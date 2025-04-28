import { useState } from 'react';

export default function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [dragging, setDragging] = useState(null);

  const handleDragStart = (index) => setDragging(index);
  const handleDrop = (index) => {
    const newList = [...items];
    const draggedItem = newList.splice(dragging, 1)[0];
    newList.splice(index, 0, draggedItem);
    setItems(newList);
    setDragging(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Drag and Drop List</h1>
      <ul className="w-64">
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            className="bg-white p-4 mb-2 rounded shadow cursor-move"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
