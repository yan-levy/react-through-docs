import React from "react";

function MyButton({ count, onClick }: any) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default MyButton;
