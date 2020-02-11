import React from "react";
import PageTitle from './PageTitle';
import SearchInput from './SearchInput';
import NavLinks from './NavLinks';
// import BrandIcon from './BrandIcon';

function Header(props){
  return(
    <div>
      <PageTitle/>
      <NavLinks/>
      <SearchInput/>
    </div>
  );
}

export default Header;

// <BrandIcon/>
