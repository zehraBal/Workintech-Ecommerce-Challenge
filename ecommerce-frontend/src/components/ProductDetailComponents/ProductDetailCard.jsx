import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCarousel from "./ProductCarousel";
export default function ProductDetailCard({ product }) {
  const stars = Array(5).fill(0);
  return (
    <section className="flex justify-center items-center flex-wrap bg-[#FAFAFA]">
      <div className="basis-[75%] pb-12 gap-[30px] flex items-center justify-between sm:flex-col sm:basis-full">
        {/*images section */}
        <div className="w-1/2 ">
          <ProductCarousel paths={product.images} />
        </div>
        {/* product detail*/}
        <div className="w-1/2 flex flex-col justify-between gap-[10px]">
          <h4 className="text-prim text-[20px] leading-[30px]">
            {product.name}
          </h4>
          {/*Stars */}
          <div className="flex items-center gap-[5px]">
            <div className="flex justify-between gap-[5px] items-center">
              {stars.map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  size="lg"
                  icon={faStar}
                  style={{ color: "#F3CD03" }}
                />
              ))}
            </div>
            <h6 className="m-0 text-sm text-sec font-bold">10 Reviews</h6>
          </div>

          <h5 className="font-bold text-2xl text-prim">${product.price}</h5>
          <div className="flex gap-1 items-center">
            <h6 className="leading-6 text-sec font-bold">Availability :</h6>
            <h6 className="leading-6 text-blue font-bold">
              {product.stock > 0 ? "In stock" : "Out of stock"}
            </h6>
          </div>
          <p className="text-sm text-[#858585]">{product.description}</p>
          <hr />
          <div className="flex items-center gap-[6px]">
            <div className="rounded-[100%] w-4 h-4 bg-blue"></div>
            <div className="rounded-[100%] w-4 h-4 bg-[#23856D]"></div>
            <div className="rounded-[100%] w-4 h-4 bg-[#E77C40]"></div>
            <div className="rounded-[100%] w-4 h-4 bg-[#252B42]"></div>
          </div>
          <div className="flex items-center gap-[10px] mt-4">
            <button className="button-primary bg-blue text-white">
              Add to cart
            </button>
            <div className="border border-[#BDBDBD] rounded-[100%] flex items-center justify-center w-10 h-10">
              <FontAwesomeIcon icon={faHeart} style={{ color: "#252B42" }} />
            </div>
            <div className="border border-[#BDBDBD] rounded-[100%] flex items-center justify-center w-10 h-10">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#252B42" }}
              />
            </div>
            <div className="border border-[#BDBDBD] rounded-[100%] flex items-center justify-center w-10 h-10">
              <FontAwesomeIcon icon={faEye} style={{ color: "#252B42" }} />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
