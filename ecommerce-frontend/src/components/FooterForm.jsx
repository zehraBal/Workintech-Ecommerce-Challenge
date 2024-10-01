export default function FooterForm() {
  return (
    <form className="w-full flex items-center" name="contact">
      <input
        className="h-[58px] border border-[#E6E6E6] rounded-md p-3 hover:border-[#23A6F0]"
        placeholder="Your email"
        type="email"
      />
      <button className="h-[58px] bg-[#23A6F0] text-white border border-[#E6E6E6] border-solid rounded-md p-3 flex items-center">
        Subscribe
      </button>
    </form>
  );
}
