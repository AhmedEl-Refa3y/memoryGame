import React from "react";

const StartButton = ({ onClick }) => {
  return (
    <div className="start-button">
      <span onClick={onClick}>Let's Go</span>
    </div>
  );
};

export default StartButton;
