import { useState } from "react";

export default function IncrementDecrementButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4 text-2xl font-bold">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
  );
}
