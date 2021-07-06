import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function MyNavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Jason Rosas Ramirez</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ml-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >

      {/* This is where the links come in :D */}
      {/* About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted - from readme*/}
      <Nav.Link href="#action1">About Me</Nav.Link>
      <Nav.Link href="#action2">Portfolio</Nav.Link>
      <Nav.Link href="#action3">Contact</Nav.Link>
      <Nav.Link href="#action4">Resume</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>            
        </div>
    )
}


/* exporting */
export default MyNavBar // will be referenced by ../App.js

