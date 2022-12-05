import logo from "./logo.svg";
import "./App.css";
import sunSoundsBase from "./sounds/sunSoundsBase.wav";
import sunSoundsMid from "./sounds/sunSoundsMid.wav";
import sunSoundsVocals from "./sounds/sunSoundsVocals.wav";
import React from "react";
import sButtonUp from "./images/sButtonUp.png";
import sButtonDown from "./images/sButtonDown.png";
import uButtonUp from "./images/uButtonUp.png";
import uButtonDown from "./images/uButtonDown.png";
import nButtonUp from "./images/nButtonUp.png";
import nButtonDown from "./images/nButtonDown.png";

function App() {
  return (
    <div className="container">
      <div className="radio">
        <div className="sunButtons">
          <AudioButton
            className={"sButton"}
            keyUpImage={sButtonUp}
            keyDownImage={sButtonDown}
            audio={base}
          ></AudioButton>
          <AudioButton
            className={"uButton"}
            keyUpImage={uButtonUp}
            keyDownImage={uButtonDown}
            audio={mid}
          ></AudioButton>
          <AudioButton
            className={"nButton"}
            keyUpImage={nButtonUp}
            keyDownImage={nButtonDown}
            audio={vocals}
          ></AudioButton>
        </div>
      </div>
    </div>
  );
}

const base = new Audio(sunSoundsBase);
const mid = new Audio(sunSoundsMid);
const vocals = new Audio(sunSoundsVocals);

function AudioButton({ className, audio, keyUpImage, keyDownImage }) {
  const [isPaused, setPaused] = React.useState(audio.paused);

  function playOrPause() {
    if (isPaused) {
      audio.play();
      setPaused(false);
    } else {
      audio.pause();
      setPaused(true);
    }
  }
  const buttonImage = isPaused ? keyUpImage : keyDownImage;
  return (
    <img
      height={53}
      className={className}
      src={buttonImage}
      onClick={playOrPause}
    ></img>
  );
}

export default App;
