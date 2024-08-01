import React from "react";

const InfoContainer = ({ yourName, timer, tries }) => {
  const minutes = Math.floor(timer / 60);
  const seconds = (timer % 60).toString().padStart(2, "0");

  return (
    <div className="info-container">
      <div className="name">
        Welcome: <span>{yourName}</span>
      </div>
      <div id="timer">{`${minutes}:${seconds}`}</div>
      <div className="tries">
        Wrong Move: <span>{tries}</span>
      </div>
    </div>
  );
};

export default InfoContainer;
