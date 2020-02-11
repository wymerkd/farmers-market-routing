import React, { useState } from "react";
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
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href='#' onClick={handleClick}>Produce</Nav.Link>
        <Nav.Link href="#" onClick={handleClick2}>Schedule</Nav.Link>
        <Nav.Link href="#link">Volunteer</Nav.Link>
      </Nav>
    </div>
  );
}

export default NavLinks;
