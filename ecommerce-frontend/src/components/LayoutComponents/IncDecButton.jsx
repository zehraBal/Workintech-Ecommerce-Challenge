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
          className="bg-blue text-white rounded-l  px-2 py-1 m-0  focus:outline-none flex items-center justify-center border-y border-[#D3D3D3]"
        >
          -
        </button>
        <span className=" bg-white py-1 px-2 m-0 text-prim border-y border-[#D3D3D3]">
          {count}
        </span>
        <button
          onClick={onIncrement}
          className="bg-blue text-white rounded-r  px-2 py-1 m-0 hover:bg-green-600 focus:outline-none border-y border-[#D3D3D3]"
        >
          +
        </button>
      </div>
    </div>
  );
}
