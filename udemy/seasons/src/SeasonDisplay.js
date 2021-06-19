import './SeasonDisplay.css';
import React from 'react';



const seasonConfig = {
    summer: { text: 'Let\'s hit the beach', icon: 'sun' },
    winter: { text: 'Burr, it is cold!', icon: 'snowflake' }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
};

const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const { text, icon } = seasonConfig[season];

    return <div className={`season-display ${season}`}>
        <i className={`icon-left icon massive ${icon}`} />
        <h1>{text}</h1>
        <i className={`icon-right icon massive ${icon}`} />
    </div >
}

export default SeasonDisplay;