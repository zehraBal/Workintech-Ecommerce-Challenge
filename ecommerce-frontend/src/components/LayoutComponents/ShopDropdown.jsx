import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Navigation

const ShopDropdown = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (gender, categoryName, categoryId) => {
    // Navigate to the shop page with category details
    navigate(`/shop/${gender}/${categoryName}/${categoryId}`);
  };

  return (
    <NavDropdown id="nav-dropdown" className="custom-nav-dropdown">
      <div className="dropdown-menu-wrapper">
        {/* Left Column for 'Kadın' */}
        <div className="dropdown-column">
          <h6>Kadın</h6>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("kadin", "ayakkabi", 2)}
          >
            Shoes
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("kadin", "tisort", 1)}
          >
            Tshirt
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("kadin", "ceket", 3)}
          >
            Jacket
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("kadin", "elbise", 4)}
          >
            Dress
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("kadin", "gomlek", 6)}
          >
            Shirt
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("kadin", "kazak", 7)}
          >
            Sweater
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("kadin", "pantolon", 9)}
          >
            Jeans
          </NavDropdown.Item>
        </div>

        {/* Right Column for 'Erkek' */}
        <div className="dropdown-column">
          <h6>Erkek</h6>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("erkek", "ayakkabi", 9)}
          >
            Shoes
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("erkek", "ceket", 10)}
          >
            Jacket
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("erkek", "gomlek", 11)}
          >
            Shirt
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("erkek", "kazak", 12)}
          >
            Sweater
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("erkek", "pantolon", 13)}
          >
            Jeans
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryClick("erkek", "tisort", 14)}
          >
            Tshirt
          </NavDropdown.Item>
        </div>
      </div>
    </NavDropdown>
  );
};

export default ShopDropdown;
