export default function ShopCard({ path, butonInfo, handleClick }) {
  return (
    <div className="w-full h-full relative">
      <img className="w-full h-full object-cover" src={path} alt="" />
      <div className="absolute bottom-6 left-[30px]">
        <button
          className="button-primary bg-white text-prim   "
          onClick={handleClick}
        >
          {butonInfo}
        </button>
      </div>
    </div>
  );
}
