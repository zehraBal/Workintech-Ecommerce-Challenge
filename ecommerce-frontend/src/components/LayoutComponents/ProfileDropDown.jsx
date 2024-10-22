import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Navigation
import { logOut } from "../../store/Actions/clientActions";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandle = () => {
    dispatch(logOut());
  };

  return (
    <NavDropdown id="nav-dropdown" className="custom-nav-dropdown mt-3">
      <div className="dropdown-menu-wrapper">
        <div className="dropdown-column">
          <NavDropdown.Item onClick={() => navigate("/profile")}>
            Profile
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("orders")}>
            Orders
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/favorites")}>
            Favorites
          </NavDropdown.Item>
          <NavDropdown.Item onClick={logOutHandle}>Log out</NavDropdown.Item>
        </div>
      </div>
    </NavDropdown>
  );
};

export default ProfileDropdown;
