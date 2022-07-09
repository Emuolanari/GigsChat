import Link from 'next/link';
import { Container, Navbar, Nav } from "react-bootstrap";
import WaitingListBtn from './WaitingListBtn';
import Brand from './../assets/brand.jpeg'
import Image from 'next/image'


export default function NavBar(){
    return(
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    {/* <div style={{ width: '10rem' }}>
                        <Image src={Brand} alt={'logo'} width={200} height={200}/>
                    </div> */}
                    Gigschat
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                        <Nav.Link as={Link} href="#"><a className="nav-link">Demo</a></Nav.Link>
                        <Nav.Link as={Link} href="#"><a className="nav-link">Benefits</a></Nav.Link>
                         <WaitingListBtn passedColor={'#0bc5b9'}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}