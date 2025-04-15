import { useState,useRef } from 'react';

// let timer;
export default function TimerChallenge({ title, targetTime }) {

	const timer = useRef(null);
	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);


	function handleStart() {
		setTimerStarted(true);
		timer.current = setTimeout(() => {
			setTimerExpired(true);
		}, targetTime * 1000);
	}

	function handleStop() {
		clearTimeout(timer.current);
	}

	return <section className="challenge">
		<h2>{title}</h2>
		{timerExpired ? <p className="challenge-time">You Lost!</p> : null}
		<p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
		<button onClick={timerStarted ? handleStop : handleStart}>
			{timerStarted ? 'Stop' : 'Start'}</button>
		<p className={timerStarted ? 'active' : undefined}>
			{timerStarted ? 'Timer is running!' : 'Click to start the timer!'}
		</p>
	</section>
}; 
