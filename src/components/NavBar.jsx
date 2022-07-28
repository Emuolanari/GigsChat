import Link from 'next/link';
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import WaitingListBtn from './WaitingListBtn';
import Logo from './Logo';


export default function NavBar(){
    return(
        <Navbar bg="white" expand="lg">
            <Container>
                <Link href="/">
                    <Navbar.Brand><Logo fill={'#001817'}/></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='d-flex justify-content-around align-items-center' style={{minWidth:'100%'}}>
                        <div className="d-flex align-items-center" style={{gap:'6rem'}}>
                            <a href="#demo" className="nav-link" >Demo</a>
                            <a href="#benefits" className="nav-link">Benefits</a>
                        </div>
                        <WaitingListBtn passedColor={'#0bc5b9'}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}