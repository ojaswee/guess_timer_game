import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(null);
  const [enteredPlayerName, setenteredPlayerName] = useState("Player 1");
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setenteredPlayerName(event.target.value);
  }

  function handleClick() {
    playerName.current.value = "";
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" onChange={handleNameChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
