import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/Actions/clientActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandle = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <Dropdown align="end" className="custom-profile-dropdown ">
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        <FontAwesomeIcon
          icon={faUser}
          className="text-blue sm:text-[#3C403D] w-5 h-5 sm:w-4 sm:h-4"
        />
      </Dropdown.Toggle>

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
