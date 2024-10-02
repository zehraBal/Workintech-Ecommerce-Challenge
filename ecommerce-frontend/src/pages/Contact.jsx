export default function Contact() {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-75 z-10"></div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-contact-bg bg-cover bg-[center_top_10%] z-0"></div>

      {/* Contact Us Section */}
      <div className="w-[497px] relative z-20 text-white">
        <h2 className="text-4xl font-bold">CONTACT US</h2>
        <p className="mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <button className="mt-8 px-6 py-3 bg-[#23A6F0] hover:bg-blue-700 rounded-lg">
          Contact Us
        </button>
      </div>

      <div className="relative z-20 text-white flex flex-col md:flex-row w-full justify-between px-12 mt-12">
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Paris</h2>
            <p>1901 Thorn ridge Cir.</p>
            <p>75000 Paris</p>
            <p>Phone : +451 215 215</p>
            <p>Fax : +451 215 215</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">New York</h2>
            <p>2715 Ash Dr. San Jose</p>
            <p>75000 Paris</p>
            <p>Phone : +451 215 215</p>
            <p>Fax : +451 215 215</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Berlin</h2>
            <p>4140 Parker Rd.</p>
            <p>75000 Paris</p>
            <p>Phone : +451 215 215</p>
            <p>Fax : +451 215 215</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">London</h2>
            <p>3517 W. Gray St. Utica</p>
            <p>75000 Paris</p>
            <p>Phone : +451 215 215</p>
            <p>Fax : +451 215 215</p>
          </div>
        </div>
      </div>
    </div>
  );
}
