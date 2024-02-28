import React, { useState } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const handleButtonReset = () => {
    setProgress(0);
  };

  const getColor = () => {
    if (progress < 40) {
      return "#b92d44";
    } else if (progress < 70) {
      return "#be6e7b";
    } else {
      return "#e4a8b2";
    }
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`, backgroundColor: getColor() }}
        ></div>
      </div>
      <div className="progress-label">{progress}%</div>
      <button onClick={handleButtonClick}>Progress</button>
      <button onClick={handleButtonReset}>Reset</button>
    </div>
  );
};
