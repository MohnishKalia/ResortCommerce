import React from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../CartContext'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <FontAwesomeIcon icon={faRupeeSign} className="mr-2" />
                    resCohost
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="mr-3 nav-link">Marketplace</Link>
                        <Link to="/cart" className="btn btn-outline-secondary">
                            <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                            Checkout
                                <CartContext.Consumer>
                                {([resorts]) => {
                                    const count = resorts.reduce((i, res) => i + res.quantity, 0);
                                    return (
                                        <>
                                            {count !== 0 &&
                                                <Badge variant="danger" className="ml-2">
                                                    {count}
                                                </Badge>}
                                        </>
                                    );
                                }}
                            </CartContext.Consumer>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;