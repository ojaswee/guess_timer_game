import { useImperativeHandle, useRef, forwardRef } from "react";
import {createPortal} from "react-dom";

const ResultModal = forwardRef(({ remainingTime, targetTime }, ref) => {
	const dialog = useRef();

	const userWon = (remainingTime >= 0);

	useImperativeHandle(ref, () => ({
		open: () => {
			dialog.current.showModal();
		},
	}));

	return createPortal(
		<dialog ref={dialog} className="result-modal">
			{userWon ? <h2> You Won</h2> : <h2>You Lost</h2>}
			<p>
				The target time was: <b>{targetTime} secs</b>
			</p>
			<p>
				You stopped the timer with <b>{Math.max(remainingTime / 1000, 0)} seconds left.</b>
			</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
		,document.getElementById("modal")
	);
});

export default ResultModal;