import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/Actions/clientActions";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandle = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <Dropdown align="end" className="custom-profile-dropdown mt-3">
      <Dropdown.Toggle variant="link" id="dropdown-basic"></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button" onClick={() => navigate("/profile")}>
          Profile
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => navigate("/order-history")}>
          Orders
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => navigate("/favorites")}>
          Favorites
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={logOutHandle}>
          Log out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
