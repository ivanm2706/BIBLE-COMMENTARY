import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LangModeButton from './LangModeButton';
import { Link } from 'react-router-dom';

function BookNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">BilbeCommentary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/book">Jump to text</Nav.Link>
          </Nav>
          <div className="d-flex ms-auto">
            <LangModeButton />
          </div>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BookNav;