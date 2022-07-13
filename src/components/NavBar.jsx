import Link from 'next/link';
import { Container, Navbar, Nav } from "react-bootstrap";
import WaitingListBtn from './WaitingListBtn';
import LOGO from './../assets/logo.svg'
import Logo from './Logo';
import Image from 'next/image';


export default function NavBar(){
    {/* */}
    return(
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand as={Link} href="/">
                 <Logo fill={'#001817'}/>
                    {/* <Image src={} alt='logo' style={{cursor: 'pointer'}}/> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='d-flex justify-content-around' style={{minWidth:'100%'}}>
                         <a href="#demo" className="nav-link" >Demo</a>
                        <a href="#benefits" className="nav-link">Benefits</a>
                        <WaitingListBtn passedColor={'#0bc5b9'}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}