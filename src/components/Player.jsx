import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(null);
  const [enteredPlayerName, setenteredPlayerName] = useState("Player 1");

  function handleClick() {
    setenteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
