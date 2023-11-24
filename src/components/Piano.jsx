import { useState } from "react";

function Piano() {
  const [audio, setAudio] = useState(new Audio("/src/assets/audios/a.wav"));
  const [volume, setVolume] = useState(1);
  // on met une note par default

  // on applique cette fonction a tout nos element note
  const pianoPlay = (note) => {
    const sound = new Audio(`/src/assets/audios/${note}.wav`);
    setAudio(sound);
    sound.play();

    const clicKey = document.querySelector(`data-key=${note}`);
    clicKey.classList.add("active");
    setTimeout(() => {
      clicKey.classList.remove("active");
    }, 150);
  };




  function slideVolume(e) {
    setVolume(e.target.value);
    audio.volume = e.target.value;
  }

  const keys = [
    "z",
    "d",
    "e",
    "t",
    "y",
    "u",
    "i",
    "o",
   /* "j",
    "u",
    "i",
    "g",
    "o",
    "p",
    "z",*/
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
        {keys.map((note) => (
          <li key={note}>
            <button onClick={() => pianoPlay(note)} data-key={note}>
              {note}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Piano;
