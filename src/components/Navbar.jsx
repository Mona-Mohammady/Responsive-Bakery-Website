import React from 'react'
import "../cssfiles/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function Header() {
    
                    
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                        <div className="logo">
                           
                            <h2>Bakery</h2>
                        </div>
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center m-auto ps-md-5">
                        <Nav className="me-auto gap-md-5 nav__item">
                            <Nav.Link href="#/home">Home</Nav.Link>
                            <Nav.Link href="#/about">About</Nav.Link>
                            <Nav.Link href="#/offers">Our Offers</Nav.Link>
                            <Nav.Link href="#/gallery">Gallery</Nav.Link>
                            <Nav.Link href="#/contact">Contact Us</Nav.Link>

                        </Nav>

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )



};
export default Header;
