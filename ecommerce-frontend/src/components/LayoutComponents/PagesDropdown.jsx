import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function PagesDropdown() {
  const navigate = useNavigate();
  return (
    <Dropdown align="end" className="custom-profile-dropdown ">
      <Dropdown.Toggle variant="link" id="dropdown-basic"></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button" onClick={() => navigate("/team")}>
          Team
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => navigate("/blog")}>
          Blog
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => navigate("/pricing")}>
          Pricing
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
