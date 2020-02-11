import React from "react";
import PageTitle from './PageTitle';
import SearchInput from './SearchInput';
import NavLinks from './NavLinks';
import { Navbar } from 'react-bootstrap';
// import BrandIcon from './BrandIcon';

function Header(props){
  
  return(
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><PageTitle/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLinks/>
          <SearchInput/>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

// <BrandIcon/>
