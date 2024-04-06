import ButtonColor from "./Button";
import React, { useState } from "react";

function generateRandomColor() {
  const randomHexNumber = Math.floor(Math.random() * 0xffffff);
  const randomColor = randomHexNumber.toString(16);

  return "#" + randomColor;
}

function App() {
  const [color, setColors] = useState("#FFFFFF");

  const handleClick = () => {
    const newColor = generateRandomColor();
    setColors(newColor);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Random Color </button>
      <ButtonColor color={color} />
    </div>
  );
}

export default App;
