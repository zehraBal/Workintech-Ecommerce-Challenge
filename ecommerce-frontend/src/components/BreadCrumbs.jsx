export default function BreadCrumbs({ name, address }) {
  return (
    <div className="flex gap-4 py-[10px]">
      <a
        className=" text-sm no-underline text-[#252B42] font-bold"
        href="/home"
      >
        Home
      </a>
      <i className="arrow-right"></i>
      <a
        className=" text-sm no-underline text-[#737373] font-bold"
        href={address}
      >
        {name}
      </a>
    </div>
  );
}
