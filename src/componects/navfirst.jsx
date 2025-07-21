import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-bootstrap/esm/NavLink';

function Navfirst() {
  return (
    <div className="custom w-100">
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Nav className="d-flex">
              <Nav.Link href="#home">About Us <span className="strateline">|</span></Nav.Link>
              <Nav.Link href="#features">My Account <span className="strateline">|</span></Nav.Link>
              <Nav.Link href="#pricing">Wishlist <span className="strateline">|</span></Nav.Link>
              <Nav.Link href="#pricing">Order Tracking</Nav.Link>
            </Nav>

            <Nav className="text-center flex-grow-1">
              <NavLink className="website-title">Hello, this is my e-commerce website</NavLink>
            </Nav>

            <Nav className="d-flex align-items-center">
              <Nav.Link href="#home">Need help? Call Us: <span className="nober">+180090052</span></Nav.Link>
              
              <NavDropdown title="English" id="lang-dropdown" className="small-dropdown">
                <NavDropdown.Item>Francais</NavDropdown.Item>
                <NavDropdown.Item>Deutsch</NavDropdown.Item>
                <NavDropdown.Item>Русский</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="USD" id="currency-dropdown" className="small-dropdown">
                <NavDropdown.Item>INR</NavDropdown.Item>
                <NavDropdown.Item>EUR</NavDropdown.Item>
                <NavDropdown.Item>GBP</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navfirst;

