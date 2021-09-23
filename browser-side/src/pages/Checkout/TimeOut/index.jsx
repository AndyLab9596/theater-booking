import React, { useMemo } from 'react';
import { zeroPad } from 'react-countdown';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';

const TimeOut = () => {

    const setTimeCount = useMemo(() => {
        return Date.now() + 300000
    }, [])

    const handleTimeOut = () => {
        // console.log('Time Out')
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