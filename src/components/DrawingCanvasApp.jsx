import { useRef, useState } from 'react';

export default function DrawingCanvas() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  const startDraw = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const endDraw = () => setDrawing(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border bg-white"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
      />
    </div>
  );
}
