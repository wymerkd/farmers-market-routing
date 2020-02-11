import React from 'react';
import PropTypes from 'prop-types'

function Produce(props){
  return(
    <div>
      <h2>Month - {props.month}</h2>
      <ul>- Available Selection -
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
