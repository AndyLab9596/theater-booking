import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonCheckout = ({ schedule }) => {
    return (
        <NavLink to={`/checkout/${schedule.maLichChieu}`}
            className="text-md font-semibold text-indigo-300 m-1 
                    hover:text-purple-800 bg-gray-600 p-1 rounded-lg 
                    hover:bg-green-500 transition duration-150 ease-in-out">
            {moment(schedule.ngayChieuGioChieu).format('hh:mm')} ~ {moment(schedule.ngayChieuGioChieu).add(120, 'm').format('hh:mm')}

        </NavLink>
    );
};

export default ButtonCheckout;