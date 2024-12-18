import { useEffect, useState, useRef } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const isLoggedin = useSelector((state) => state.client.isLoggedIn);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      setDropdownOpen(true);
    }
  }, [cart]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const handleClick = () => {
    if (isLoggedin) {
      navigate("/order");
    } else {
      navigate("/login");
    }
  };

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown} ref={dropdownRef}>
      <DropdownToggle variant="link" id="dropdown-basic"></DropdownToggle>
      <DropdownMenu>
        <div className="w-full flex items-center flex-col gap-4 py-10 px-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="w-[95%] flex items-center justify-between px-9 bg-[#FAFAFA] border border-solid border-sec rounded-md shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded"
                  src="images/user1.png"
                  alt={item.product.name}
                />
                <div className="flex flex-col ">
                  <h5 className="text-lg font-bold text-prim">
                    {item.product.name}
                  </h5>
                  <h6 className="text-md font-semibold text-prim">
                    ${item.product.price}
                  </h6>
                  <h6 className="text-sm">Quantity: {item.count}</h6>
                </div>
              </div>
            </div>
          ))}
          {cart.length != 0 ? (
            <div className="w-[300px] flex gap-2 px-9 ">
              <button
                className="button-sm bg-sec text-white p-2 w-1/2"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Go to cart
              </button>
              <button
                className="button-sm bg-blue text-white p-2"
                onClick={handleClick}
              >
                Complete your shopping
              </button>
            </div>
          ) : (
            <div className="w-[300px] flex gap-9 px-9 flex-col items-center">
              <h5>
                Your cart is empty.
                <button
                  className="button-primary bg-blue text-white p-2"
                  onClick={() => navigate("/shop")}
                >
                  Start shopping!
                </button>
              </h5>
            </div>
          )}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}
