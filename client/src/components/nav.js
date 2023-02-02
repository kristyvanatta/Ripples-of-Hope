import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Signup from './signup';
import Login from './login';
import Auth from '../utils/auth';


const AppNavbar = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar' />
                <Navbar.Collapse id='navbar' />
                    <Nav className='ml-auto'>
                        <Nav.Link as={Link} to='/' >
                        Home
                        </Nav.Link>
                        {Auth.loggedIn() ? (
                            <>
                            <Nav.Link
                            </>
                        )}
                    </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Navbar