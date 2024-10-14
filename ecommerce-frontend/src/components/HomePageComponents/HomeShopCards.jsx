import { useNavigate } from "react-router-dom";
import ShopCard from "./ShopCard";

export default function HomeShopCards() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <section className="flex justify-center items-center flex-wrap">
      <div className="basis-[%80] flex flex-col items-center py-20 gap-12">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-prim">EDITOR’S PICK</h2>
          <div className="text-center">
            <p className="text-sm text-sec">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
        </div>
        <div className="w-[90%] flex gap-[30px] ">
          <div className="w-1/2">
            <ShopCard
              path={"images/sc1.png"}
              butonInfo={"MEN"}
              handleClick={handleClick}
            />
          </div>
          <div className="w-1/4">
            <ShopCard
              path={"images/sc2.png"}
              butonInfo={"WOMEN"}
              handleClick={handleClick}
            />
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center gap-4 ">
            <div>
              <ShopCard
                path={"images/sc3.png"}
                butonInfo={"ACCESSORIES"}
                handleClick={handleClick}
              />
            </div>
            <div>
              <ShopCard
                path={"images/sc4.png"}
                butonInfo={"KIDS"}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
