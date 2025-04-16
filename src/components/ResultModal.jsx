export default function ResultModal({ ref, result, targetTime }) {
	return (
		<dialog ref={ref} className="result-modal">
			<h2> You {result}</h2>
			<p>
				The target time was: <b>{targetTime} secs</b>
			</p>
			<p>
				You stopped the timer with <b> X seconds left.</b>
			</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	);
}