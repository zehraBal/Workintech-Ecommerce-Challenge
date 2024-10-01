import ShopDropdown from "./ShopDropdown";

export default function HeaderNav() {
  return (
    <div className="w-full flex justify-evenly">
      <div className="h-[58px] leading-8">
        <h3 className="font-bold">BrandName</h3>
      </div>
      <div>
        <nav className="flex gap-4 leading-6">
          <a className="text-[#737373] font-bold no-underline" href="/">
            Home
          </a>
          <ShopDropdown />
          <a className="text-[#737373] font-bold no-underline" href="/about">
            About
          </a>
          <a className="text-[#737373] font-bold no-underline" href="/blog">
            Blog
          </a>
          <a className="text-[#737373] font-bold no-underline" href="/contact">
            Contact
          </a>
          <a className="text-[#737373] font-bold no-underline" href="/pages">
            Pages
          </a>
        </nav>
      </div>
    </div>
  );
}
