import { useState } from "react";

export default function DescriptionCard({ product }) {
  const imagePaths = product.images || [];
  // console.log("imagePaths", imagePaths[0].url);
  const [activeTab, setActiveTab] = useState("description");
  return (
    <section className="flex justify-center items-center flex-wrap">
      <div className="w-[75%] flex flex-col justify-center items-center">
        <nav className="w-full flex items-center justify-center py-4 font-bold text-sec leading-6">
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setActiveTab("description")}
                className={`py-2 px-4 font-semibold text-gray-700 ${
                  activeTab === "description"
                    ? "border-b-2 border-green-500"
                    : ""
                }`}
              >
                Description
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("additional_info")}
                className={`py-2 px-4 font-semibold text-gray-700 ${
                  activeTab === "additional_info"
                    ? "border-b-2 border-green-500"
                    : ""
                }`}
              >
                Additional Information
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-2 px-4 font-semibold text-gray-700 ${
                  activeTab === "reviews" ? "border-b-2 border-green-500" : ""
                }`}
              >
                Reviews
              </button>
            </li>
          </ul>
        </nav>
        <div className="w-full border-b border-solid border-[#ECECEC]"></div>
        <div className="w-full pt-6 pb-12">
          {activeTab === "description" && (
            <div className="w-full flex  items-center flex-wrap  gap-[30px] justify-center">
              <div className="w-[340px] h-full ">
                <img
                  className="object-cover rounded-md shadow-unsplash"
                  src={imagePaths[0].url}
                />
              </div>
              <div className="w-1/3 flex flex-col  items-start gap-[30px] sm:w-full">
                <h5 className="text-2xl font-bold text-prim">Description</h5>
                <div>
                  <p className="text-sm text-sec">{product.description}</p>
                </div>
              </div>
              <div className="flex flex-col  gap-[30px] items-start">
                <h5 className="text-2xl font-bold text-prim">
                  the quick fox jumps over{" "}
                </h5>
                <ul className="flex flex-col items-start gap-[10px] p-0">
                  <li className="flex gap-5 items-center">
                    <span className="arrow-right"></span>
                    the quick fox jumps over
                  </li>{" "}
                  <li className="flex gap-5 items-center">
                    <span className="arrow-right"></span>
                    the quick fox jumps over
                  </li>{" "}
                  <li className="flex gap-5 items-center">
                    <span className="arrow-right"></span>
                    the quick fox jumps over
                  </li>{" "}
                  <li className="flex gap-5 items-center">
                    <span className="arrow-right"></span>
                    the quick fox jumps over
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "additional_info" && (
            <div className="flex flex-col justify-center items-start gap-6">
              <h5 className="text-2xl font-bold text-prim">
                Additional Information
              </h5>
              <ul className="flex flex-col items-start gap-[10px] p-0">
                <li className="flex gap-5 items-center">
                  <span className="arrow-right"></span>
                  Sell Count: {product.sell_count}
                </li>{" "}
                <li className="flex gap-5 items-center">
                  <span className="arrow-right"></span>
                  Rating: {product.rating}
                </li>{" "}
                <li className="flex gap-5 items-center">
                  <span className="arrow-right"></span>
                  Stock: {product.stock}
                </li>{" "}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Reviews</h2>
              <ul>
                <li className="mb-4">
                  <p className="font-semibold">John Doe</p>
                  <p>"Great product, highly recommend!"</p>
                </li>
                <li className="mb-4">
                  <p className="font-semibold">Jane Smith</p>
                  <p>"Quality could be better, but overall satisfied."</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
