import React from "react";

const FinishScreen = ({ yourName, timer, tries, totalTime }) => {
  if (timer > 0) {
    return (
      <h1 style={{ color: "white", textAlign: "center" }}>جدع ي ابو شخه</h1>
    );
  }

  // const timeTaken = totalTime - timer;
  // const takenMinutes = Math.floor(timeTaken / 60);
  // const takenSeconds = (timeTaken % 60).toString().padStart(2, "0");

  // return (
  //   <div id="finish-screen">
  //     <h1>لقد انتهت اللعبة!</h1>
  //     <p>
  //       الاسم: <span>{yourName}</span>
  //     </p>
  //     <p>
  //       الوقت: <span>{`${takenMinutes}:${takenSeconds}`}</span>
  //     </p>
  //     <p>
  //       عدد الأخطاء: <span>{tries}</span>
  //     </p>
  //   </div>
  // );
};

export default FinishScreen;
