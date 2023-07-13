"use client";

import { useState } from "react";
import styles from "./MyButton.module.css";

function MyIndividualButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="styles.button" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default MyIndividualButton;
