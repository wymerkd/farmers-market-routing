import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav"
import Produce from './Produce'

function NavLinks(){
  function handleClick(e) {
  e.preventDefault();
  console.log('hi');
  const seasonalProduce = document.getElementById('displaySeasonalProduce');
  if (seasonalProduce.style.display == "none") {
    seasonalProduce.style.display = "block";
  } else {
    seasonalProduce.style.display = "none";
  }

}
function handleClick2(e) {
const scheduleDisplay = document.getElementById('displaySchedule');
if (scheduleDisplay.style.display == "none") {
  scheduleDisplay.style.display = "block";
} else {
  scheduleDisplay.style.display = "none";
}
}


  return(
    <div>
      <Nav className="mr-auto">
        <Link to="/">Home</Link>
        <Link to="/produce">Produce</Link>
        <Nav.Link href="#" onClick={handleClick2}>Schedule</Nav.Link>
        <Nav.Link href="#link">Volunteer</Nav.Link>
        <Link to="/newmarket">New Market</Link>
      </Nav>
    </div>
  );
}

export default NavLinks;
