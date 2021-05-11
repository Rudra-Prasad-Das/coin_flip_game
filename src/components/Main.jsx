import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import Heads from "../assets/Heads.jpeg";
import Tails from "../assets/Tails.jpeg";

const Main = () => {
  const [currentValue, setCurrentValue] = useState(-1);
  const [tossed, setTossed] = useState(false);
  const [totalFlips, setTotalFlips] = useState(0);
  const [totalHeads, setTotalHeads] = useState(0);
  const [totalTails, setTotalTails] = useState(0);

  const handleFlip = (e) => {
    setTossed(true);
    const res = Math.floor(Math.random() * 2);
    if (res === 0) {
      setTotalHeads(totalHeads + 1);
    } else {
      setTotalTails(totalTails + 1);
    }
    setTotalFlips(totalFlips + 1);
    setCurrentValue(res);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="score">
          <p>Total: {totalFlips}</p>
          <p>Heads: {totalHeads}</p>
          <p>Tails: {totalTails}</p>
        </div>
        <h1>Let's Flip a coin!</h1>
        {tossed && <ImageContainer src={currentValue === 0 ? Heads : Tails} />}
        {tossed && (
          <p>
            <span>{totalFlips+'.'}</span>It's a{" "}
            {currentValue === 0 ? "Heads" : "Tails"}
          </p>
        )}
        <button onClick={handleFlip}>Flip Me!</button>
      </header>
    </div>
  );
};

export default Main;
