import './App.css';
import { Navbar, Nav,  Container } from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import  Contact  from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar bg="dark" variant='dark' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">AllYums</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
             
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    <div>
      <Routes>

      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>

      </Routes>

    </div>

    </BrowserRouter>
  );
}

export default App;
