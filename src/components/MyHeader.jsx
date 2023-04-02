import { Navbar, Nav, Image, NavLink } from "react-bootstrap";
import { FaSearch, FaBell, } from "react-icons/fa";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { Dropdown, Button } from "react-bootstrap";

const MyHeader = () => {
  return (
    <header style={{ backgroundColor: "#141414", color: "white" }}>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#141414", color: "white" }}>
      <NavLink className="ps-4">
        <Image src="./assets/images/Logo_Dendiflix.png" style={{ width: "160px", height: "50px" }} />
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="#home" className="font-weight-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="active font-weight-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#link" className="font-weight-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#link" className="font-weight-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#link" className="font-weight-bold">
            My List
          </Nav.Link>
        </Nav>
        <FaSearch className="mx-3" />
        <div>Kids</div>
        <FaBell className="mx-3" />
        <Dropdown className="d-inline-block">
      <Dropdown.Toggle variant="link" id="dropdown-kids"

              style={{ backgroundColor: "#141414" }}
              className="text-light rounded-0">
        <img src="/assets/images/kids_icon.png" alt="Kids_icon" height="26" />
        
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ backgroundColor: "#141414"}} variant="dark">
        <Dropdown.Item className="text-light">Kids</Dropdown.Item>
        <Dropdown.Item className="text-light">Daniele</Dropdown.Item>
        <Dropdown.Item className="text-light">Family</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Navbar.Collapse>
    </Navbar>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="Tvshow mb-4 ps-4 pe-4 " >TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle
              as={Button}
              variant="light"
              style={{ backgroundColor: "#141414" }}
              className="text-light rounded-0"
            >
              Genres &nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "#141414" }} variant="dark">
              <Dropdown.Item className="text-light">Comedy</Dropdown.Item>
              <Dropdown.Item className="text-light">Drama</Dropdown.Item>
              <Dropdown.Item className="text-light">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div style={{ fontSize: "1.2em" }}>
          <BsFillGridFill />
          <BsFillGrid3X3GapFill className="mx-4" />
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
