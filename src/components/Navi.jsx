import {Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navi({ isLoggedIn, username, handleLogout , totalCartItems}) {
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
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/cart">
                                My Cart   
                                {totalCartItems > 0 && (<Badge bg="primary" pill className='ms1'>{totalCartItems}</Badge>)}
                            </Nav.Link>
                            <NavDropdown title={username ? `Hello, ${username}` : 'My account'} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/profile">My profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link}><button onClick={handleLogout}>Logout</button></NavDropdown.Item> 
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
// todo 1. right align nav dropdown