import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="/">React Hook</Navbar.Brand>
                    <Nav className="my-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/usestate">useState Hook</Nav.Link>
                        <Nav.Link as={Link} to="/useeffect">useEffect Hook</Nav.Link>
                        <Nav.Link as={Link} to="/usecallback">useCallBack Hook</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}




