import React from 'react';
import PropTypes from "prop-types";

function NewMarket(){
  return(
    <div>
      <form>
        <input
          type="text"
          id="day"
          placeholder="Day of the week"/>
        <input
          type="text"
          id="location"
          placeholder="Location"/>
        <input
          type="text"
          id="hours"
          placeholder="Hours of Operation"/>
        <input
          type="text"
          id="booth"
          placeholder="Booth location"/>
      </form>
    </div>
  );

}

export default NewMarket;
