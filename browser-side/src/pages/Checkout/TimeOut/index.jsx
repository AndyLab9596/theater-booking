import React, { useMemo } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { useDispatch } from 'react-redux';
import createAction from '../../../store/actions/createAction/';
import { actionTypes } from '../../../store/actions/Types';

const TimeOut = () => {
    const dispatch = useDispatch();

    const setTimeCount = useMemo(() => {
        return Date.now() + 300000
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