import React from 'react';

function NewMarket(){
  return(
    <div>
      <form>
        <input
          type="text"
          id="day"
          placeholder="Day of the week"/>
        <br/>
        <input
          type="text"
          id="location"
          placeholder="Location"/>
        <br/>
        <input
          type="text"
          id="hours"
          placeholder="Hours of Operation"/>
        <br/>
        <input
          type="text"
          id="booth"
          placeholder="Booth location"/>
        <br/>
        <br/>
        <button type='submit'>Register market!</button>
      </form>
    </div>
  );
}

export default NewMarket;
