import { set } from 'lodash';
import moment from 'moment';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const MenuSchedule = ({ day, movie }) => {

    return (
        <Fragment key={day}>
            <p>{day}</p>



        </Fragment >
    );
};



export default MenuSchedule;