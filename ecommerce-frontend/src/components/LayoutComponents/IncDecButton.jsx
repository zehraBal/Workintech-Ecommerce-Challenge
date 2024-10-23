export default function IncrementDecrementButton({
  count,
  onDecrement,
  onIncrement,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center text-xl font-bold">
        <button
          onClick={onDecrement}
          className="bg-sec text-white rounded-l  px-2 py-1 m-0  focus:outline-none flex items-center justify-center"
        >
          -
        </button>
        <span className="bg-[#D3D3D3] py-1 px-2 m-0 text-prim">{count}</span>
        <button
          onClick={onIncrement}
          className="bg-sec text-white rounded-r  px-2 py-1 m-0 hover:bg-green-600 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
  );
}
