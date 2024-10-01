import React from "react";
import { NavDropdown } from "react-bootstrap";

const ShopDropdown = () => {
  return (
    <NavDropdown
      title="Shop "
      id="nav-dropdown"
      className="custom-nav-dropdown"
    >
      <div className="dropdown-menu-wrapper">
        {/* Left Column for 'Kadın' */}
        <div className="dropdown-column">
          <h6>Kadın</h6>
          <NavDropdown.Item href="/shop/women/bags">Bags</NavDropdown.Item>
          <NavDropdown.Item href="/shop/women/belts">Belts</NavDropdown.Item>
          <NavDropdown.Item href="/shop/women/cosmetics">
            Cosmetics
          </NavDropdown.Item>
          <NavDropdown.Item href="/shop/women/hats">Hats</NavDropdown.Item>
        </div>

        {/* Right Column for 'Erkek' */}
        <div className="dropdown-column">
          <h6>Erkek</h6>
          <NavDropdown.Item href="/shop/men/bags">Bags</NavDropdown.Item>
          <NavDropdown.Item href="/shop/men/belts">Belts</NavDropdown.Item>
          <NavDropdown.Item href="/shop/men/cosmetics">
            Cosmetics
          </NavDropdown.Item>
          <NavDropdown.Item href="/shop/men/hats">Hats</NavDropdown.Item>
        </div>
      </div>
    </NavDropdown>
  );
};

export default ShopDropdown;
