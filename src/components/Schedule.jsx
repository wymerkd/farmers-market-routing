import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return(
    <div>
          <table>
            <style jsx>{`
                table {
                  border: 4px solid black;
                  width: 40%;
                  margin-left: 20px;
                }

                td {
                  width: 25%;
                }
                th {
                  border-bottom: 2px solid black;
                }
                `}</style>
        <tr>
          <th>Day</th>
          <th>Location</th>
          <th>Hours</th>
          <th>Booth</th>
        </tr>
        <tr>
          <td>{props.day}</td>
          <td>{props.location}</td>
          <td>{props.hours}</td>
          <td> {props.booth}</td>
        </tr>
      </table>
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
