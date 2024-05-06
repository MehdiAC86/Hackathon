import { useState } from "react";
import "../assets/Style/piano.css";

function Piano() {
  const [audio, setAudio] = useState(new Audio("/src/assets/audios/a.wav"));

  const pianoPlay = (note) => {
    const sound = new Audio(`/src/assets/audios/${note}.wav`);
    setAudio(sound);
    sound.play();

    const clicKey = document.querySelector(`[data-key=${note}]`);
    clicKey.classList.add("active");
    setTimeout(() => {
      clicKey.classList.remove("active");
    }, 150);
  };

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
      <ul className="liste-notes">
        {keys.map((note, index) => (
          <li key={note}>
            <button className="button"></button>
            {index == 1 ||
            index == 3 ||
            index == 8 ||
            index == 6 ||
            index == 10 ||
            index == 13 ||
            index == 15
              ? "black"
              : "white"}
            onClick={() => pianoPlay(note)}
            data-key={note}
            <button
              className={
                index == 1 ||
                index == 3 ||
                index == 8 ||
                index == 6 ||
                index == 10 ||
                index == 13 ||
                index == 15
                  ? "black"
                  : "white"
              }
              onClick={() => pianoPlay(note)}
              data-key={note}
            >
              {note}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Piano;
