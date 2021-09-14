import React, { useMemo } from 'react';
import { zeroPad } from 'react-countdown';
import Countdown from 'react-countdown';

const TimeOut = () => {

    const setTimeCount = useMemo(() => { // dùng useMemo để không bị reset
        return Date.now() + 300000
    }, [])

    const handleTimeOut = () => {
        console.log('Time Out')
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