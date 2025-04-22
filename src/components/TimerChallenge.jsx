import { useState, useRef, useEffect } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(null);
    const dialog = useRef(null);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const [timerStarted, setTimerStarted] = useState(false);

    // UseEffect to handle when the timer expires
    useEffect(() => {
        if (timeRemaining <= 0 && timerStarted) {
            clearInterval(timer.current);
            setTimerStarted(false);
            dialog.current.open(); // Open the dialog when the timer expires
        }
    }, [timeRemaining, timerStarted]);

    function handleStart() {
        setTimerStarted(true);
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 15);
        }, 15);
    }

    function handleStop() {
        clearInterval(timer.current);
        setTimerStarted(false);
        dialog.current.open(); // Open the dialog when manually stopped
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
					{targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'}
                </button>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is running!' : 'Click to start the timer!'}
                </p>
            </section>
        </>
    );
}