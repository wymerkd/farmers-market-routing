import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return(
    <div>
      <h2>Day - {props.day}</h2>
      <h3>Location - {props.location}</h3>
      <h3>Hours - {props.hours}</h3>
      <h3>Booth - {props.booth}</h3>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}

export default Schedule;
