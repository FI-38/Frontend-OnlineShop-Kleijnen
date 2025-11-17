import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navi({ isLoggedIn, handleLogout }) {
    return (
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand  as={Link} to="/">ShopShop GmbH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        {!isLoggedIn ?
                        <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/cart">My Cart</Nav.Link>
                            <NavDropdown title="Open me" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/profile">My profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
}

export default Navi;


// https://react-bootstrap.github.io/docs/components/navbar/