import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/">Pet Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/produtos">Produtos</Nav.Link>
            <Nav.Link to="/banhoetosa">Banho e Tosa</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;