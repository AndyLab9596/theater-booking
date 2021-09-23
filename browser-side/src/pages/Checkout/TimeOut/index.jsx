import React, { useEffect, useMemo, useState } from 'react';
import { zeroPad } from 'react-countdown';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../../store/actions/Types';
import createAction from '../../../store/actions/createAction/'

const TimeOut = () => {
    const dispatch = useDispatch();

    const setTimeCount = useMemo(() => {
        return Date.now() + 20000
    }, [])

    const handleTimeOut = () => {
        dispatch(createAction(actionTypes.TIME_OUT))
    }

    return (
        <Countdown
            date={setTimeCount}
            renderer={({ minutes, seconds }) => (
                <span className="text-4xl text-red-500 font-bold leading-5">
                    {zeroPad(minutes)}:{zeroPad(seconds)}
                </span>)
            }
            onComplete={() => handleTimeOut()}

        />
    );
};

export default TimeOut;