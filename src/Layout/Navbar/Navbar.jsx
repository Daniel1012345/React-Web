import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import peace from "/icons/peace.svg";
import "./Navbar.css";
import $ from 'jquery';

const Navbars = () => {
  $(document).scroll(function () {
    $(".navbar-custom").toggleClass("scroll", $(this).scrollTop() > $(".navbar-custom").height())
})
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="navbar-custom">
        <Container className="water">
        
          <Navbar.Brand href="/" className="navbar-brands">
            <img
              src="http://lehigh-hss.com/wp-content/uploads/2018/01/logo3b.png"
              width="155px"
              height="110px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="collapse-change" id="responsive-navbar-nav">
            {/*<Nav className="me-auto">
            </Nav>*/}
            
            <Nav className="navbar-nav">
              <Nav.Link className="nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="/about">
                Our Philosophy
              </Nav.Link>
              <Nav.Link className="nav-link" href="/services">
                Our Services
              </Nav.Link>

              <Nav.Link className="nav-link" href="/jobs">
                Jobs
              </Nav.Link>
              <Nav.Link className="nav-link" eventKey={2} href="#memes">
                Contacts
              </Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
