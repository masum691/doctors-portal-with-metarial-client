import React from 'react';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
    return (
        <div>
            <AppoinmentHeader></AppoinmentHeader>
            <AvailableAppoinment></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;