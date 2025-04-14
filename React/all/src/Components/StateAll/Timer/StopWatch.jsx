import React, { useState, useEffect } from 'react'

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setSeconds(Prev => Prev + 1);
            }, 1000)
        }
        else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [running])

    return (
        <div>
            <h2>Stop Watch</h2>
            <h3>{seconds}</h3>

            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    )
}

export default StopWatch