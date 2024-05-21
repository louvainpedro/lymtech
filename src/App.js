import logo from './logo.svg';
import './index.css'; // Se você estiver tentando importar um arquivo CSS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home.js';
import Bpms from './pages/Bpms.js';
import CustomDevelopment from './pages/Custom Development.js';
import SupportTraining from './pages/Support and Training.js';
import ScaleAugment from './pages/Scale and Augment.js';
import Erp from './pages/Erp/Erp.js';
import Blog from './pages/Blog.js';
import Culture from './pages/Culture.js';
import Work from './pages/Work.js';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <Router>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">HOME</Link></Nav.Link>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/bpms">BPMS Consulting</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/customDevelopment">Custom Development</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/supportTraining">Support and Training</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/scaleAugment">Scale and Augument</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/automaticReconciliaion">Automatic Reconciliaion</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/erp">ERP</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/work">WORK</Link></Nav.Link>
            <NavDropdown title="INSIGTS" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/blog">Blog</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/culture">Culture & People</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link class="disabled"><Link to="/carrier">Carrier</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
     
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/bpms' element={<Bpms />} />
        <Route path='/customDevelopment' element={<CustomDevelopment />} />
        <Route path='/supportTraining' element={<SupportTraining />} />
        <Route path='/scaleAugment' element={<ScaleAugment />} />
        <Route path='/automaticReconciliation' element={<AutomaticReconciliation />} />
        <Route path='/erp' element={<Erp />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/culture' element={<Culture />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
