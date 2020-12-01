import './SeasonDisplay.css';
import React from 'react';

// this is to simplify the 2 lines of code found in the seasonDisplay
// this is the config object/s
const seasonConfig = {
  summer: {
    seasonText: 'Let\'s hit the beach!',
    seasonIcon: 'sun'
  },
  winter: {
    seasonText: 'Burr, it is cold!!',
    seasonIcon: 'snowflake'
  }
}

// helper method
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
};

// functional component
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const seasonText = season === 'winter' ? 'Burr, it\'s chilly!' : 'Let\'s hit the beach!';
  // const seasonIcon = season === 'winter' ? 'snowflake' : 'sun';
  const {seasonText, seasonIcon} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${seasonIcon} icon`}></i>
      <h1>{seasonText}</h1>
      <i className={`icon-right massive ${seasonIcon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
