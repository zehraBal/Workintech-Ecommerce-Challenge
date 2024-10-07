export default function ContactHeader() {
  return (
    <div
      className="relative bg-cover  min-h-svh  "
      style={{
        backgroundImage: 'url("/images/carousel.png")',
        backgroundPositionY: "20%",
        backgroundRepeat: "no-repeat",
        //  backgroundOrigin: "border-box",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(89.85deg, #000000 0.13%, #000000 0.14%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      <div className="relative flex justify-center items-stretch gap-8 sm:flex-col max-w-6xl mx-auto py-28 px-4 md:px-8 text-white">
        {/* Left Side - Contact Info */}
        <div className="min-w-[497px] flex flex-col  items-center justify-center space-y-8 text-left">
          <div className="flex flex-col gap-9 sm:items-center sm:text-center">
            <div>
              <h2 className="font-bold text-left">CONTACT US</h2>
            </div>
            <div>
              <p className="text-sm">
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: <br />
                Newtonian mechanics.
              </p>
            </div>
            <div>
              <button className="bg-[#23A6F0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Locations */}
        <div className="min-w-[250px] flex flex-col gap-2 items-start justify-center sm:items-center ">
          <div className="p-6 space-y-4 ">
            <h3 className="font-bold ">Paris</h3>
            <p className="text-xl">1901 Thorn ridge Cir.</p>
            <div className=" w-[58px] border-b-2 border-solid border-[#23A6F0]"></div>
            <p>75000 Paris</p>
            <p>Phone: +451 215 215</p>
            <p>Fax: +451 215 215</p>
          </div>
          <div className="p-6 space-y-4 sm:pr-16">
            <h3 className="font-bold ">Berlin</h3>
            <p className="text-xl">4140 Parker Rd.</p>
            <div className=" w-[58px] border-b-2 border-solid border-[#23A6F0]"></div>
            <p>75000 Paris</p>
            <p>Phone: +451 215 215</p>
            <p>Fax: +451 215 215</p>
          </div>
        </div>
        <div className="min-w-[250px] flex flex-col gap-2 items-start sm:items-center">
          <div className="p-6 space-y-4">
            <h3 className="font-bold ">New York</h3>
            <p className="text-xl">2715 Ash Dr. San Jose,</p>
            <div className=" w-[58px] border-b-2 border-solid border-[#23A6F0]"></div>
            <p>75000 Paris</p>
            <p>Phone: +451 215 215</p>
            <p>Fax: +451 215 215</p>
          </div>
          <div className="p-6 space-y-4">
            <h3 className="font-bold ">London</h3>
            <p className="text-xl">3517 W. Gray St. Utica,</p>
            <div className=" w-[58px] border-b-2 border-solid border-[#23A6F0]"></div>
            <p> 75000 Paris</p>
            <p>Phone: +451 215 215</p>
            <p>Fax: +451 215 215</p>
          </div>
        </div>
      </div>
    </div>
  );
}
