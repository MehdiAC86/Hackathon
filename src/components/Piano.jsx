import { useState } from "react";
import "../assets/Style/piano.css";

function Piano() {
  const [audio, setAudio] = useState(new Audio("/src/assets/audios/a.wav"));
  const [volume, setVolume] = useState(1);

  const pianoPlay = (note) => {
    const sound = new Audio(`/src/assets/audios/${note}.wav`);
    setAudio(sound);
  sound.volume=volume;
    sound.play();

    const clicKey = document.querySelector(`[data-key=${note}]`);
    clicKey.classList.add("active");
    setTimeout(() => {
      clicKey.classList.remove("active");
    }, 150);
  };

  function slideVolume(e) {
  const newVolume= parseFloat(e.target.value);
    setVolume(newVolume);
    audio.volume=newVolume
  }

  const keys = [
    "a",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "y",
    "z",
  ];

  return (
    <div className="container">
      <header>
        <div className="column volume">
          <span>volume</span>
          <input
            type="range"
            min="0"
            max="4"
            value={volume}
            step="any"
            onChange={slideVolume}
          />
        </div>
      </header>
      <ul className="liste-notes">
        {keys.map((note, index) => (
          <li key={note}>
            <button className={(index == 1 || index == 3 || index == 8 || index == 6  || index == 10 || index == 13 || index == 15) ? "black" : "white"} onClick={()=>pianoPlay(note)} data-key={note}>
              {note}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Piano;
