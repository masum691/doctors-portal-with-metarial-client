import React from 'react';

const AvailableAppoinment = ({date}) => {
    return (
        <div>
            <h1>Available date {date.toDateString()}</h1>
        </div>
    );
};

export default AvailableAppoinment;