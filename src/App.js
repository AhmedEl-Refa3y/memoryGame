import "./App.css";

import FinishScreen from "./components/FinishScreen";
import GameOver from "./components/GameOver";
import InfoContainer from "./components/InfoContainer";
import MemoryGame from "./components/MemoryGame";
import StartButton from "./components/StartButton";
import { useState, useEffect, useRef } from "react";

function App() {
  const [timer, setTimer] = useState(90);
  const [gameOver, setGameOver] = useState(false);
  const [matchedBlocks, setMatchedBlocks] = useState(0);
  const [yourName, setYourName] = useState("");
  const [tries, setTries] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false); // Track if the game is finished

  const welcomeAudioRef = useRef(null); // Create a ref for the audio element

  useEffect(() => {
    let timerInterval;
    if (timer > 0 && !gameOver && gameStarted && !gameFinished) {
      timerInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer <= 0 && gameStarted && !gameFinished) {
      setGameOver(true);
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [timer, gameOver, gameStarted, gameFinished]);

  useEffect(() => {
    if (matchedBlocks === 10) {
      // Adjust the number if you have a different total number of pairs
      setGameFinished(true);
      setGameOver(false); // Ensure GameOver is not shown
    }
  }, [matchedBlocks]);

  const startGame = () => {
    const name = prompt("What's Your Name?");
    setYourName(name || "متكتب اسمك ي اللوط");
    setTimer(90); // الوقت الافتراضي 90 ثانية
    setGameOver(false);
    setMatchedBlocks(0);
    setTries(0);
    setGameStarted(true);
    setGameFinished(false);
    if (welcomeAudioRef.current) {
      welcomeAudioRef.current.play(); // Play the audio if the ref is available
    }
  };

  const incrementTries = () => setTries((prev) => prev + 1);

  const addMatchedBlock = () => {
    setMatchedBlocks((prev) => prev + 1);
  };

  return (
    <div className="App">
      {!gameStarted && <StartButton onClick={startGame} />}
      {gameStarted && !gameFinished && (
        <div className="game-container">
          <InfoContainer yourName={yourName} timer={timer} tries={tries} />
          <MemoryGame
            matchedBlocks={matchedBlocks}
            addMatchedBlock={addMatchedBlock}
            incrementTries={incrementTries}
            setGameOver={setGameOver}
          />
        </div>
      )}
      {gameOver && timer <= 0 && !gameFinished && <GameOver />}
      <FinishScreen
        yourName={yourName}
        timer={timer}
        tries={tries}
        totalTime={90}
      />

      <audio id="welcome" ref={welcomeAudioRef}>
        <source src="/audio/welcome-traveler-97167.mp3" type="" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
