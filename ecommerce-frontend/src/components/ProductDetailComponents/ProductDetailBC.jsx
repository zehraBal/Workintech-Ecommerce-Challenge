import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../LayoutComponents/BreadCrumbs";

export default function ProductDetailBC() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <section className="flex justify-center items-center py-6 bg-[#FAFAFA]">
      <div className="basis-[75%] flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-[#e8e8e8] p-2 rounded-md"
          onClick={handleClick}
        >
          <span className="arrow-left border-prim"></span>
          <h5 className="m-0 text-prim font-bold test-base">Back</h5>
        </div>
        <BreadCrumbs name={"Shop"} />
      </div>
    </section>
  );
}
