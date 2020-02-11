import React from "react";
import Nav from "react-bootstrap/Nav"

function NavLinks(){
  return(
    <div>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <Nav.Link href="#link">Volunteer</Nav.Link>
      </Nav>
    </div>
  );
}

export default NavLinks;
