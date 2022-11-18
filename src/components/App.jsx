import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseOver, setMouseOver] = useState(false);

  function mouseIsOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  function handleClick() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onMouseOver={mouseIsOver}
        onMouseOut={mouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
