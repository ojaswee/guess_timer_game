import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef(null);
	const dialog = useRef(null);
	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleStart() {
		setTimerStarted(true);

		setTimerExpired(false); // Reset timerExpired when starting
		timer.current = setTimeout(() => {
			setTimerExpired(true);
			setTimerStarted(false);
			dialog.current.showModal();
		}, targetTime * 1000);
	}

	function handleStop() {
		clearTimeout(timer.current);
		setTimerStarted(false);
	}

	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} result="lost" />
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