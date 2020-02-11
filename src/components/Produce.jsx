import React from 'react';
import PropTypes from 'prop-types'

function Produce(props){
  var month = {
    backgroundColor: "#939665",
    padding: "8px",
    borderRadius: "8px",
    margin: "8px",
    width: "60%"
  }

  var monthTitle = {
    color: "white"
  }

  var produceSelection = {
    backgroundColor: "#a89f74",
    borderRadius: "4px",
    border: "2px solid #8f8865"
  }

  return(
    <div style={month}>
      <h2 style={monthTitle}>Month - {props.month}</h2>
      <ul style={produceSelection}>- Available Selection -
        {props.selection.map(function(item, index){
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default Produce;
