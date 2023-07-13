import Image from "next/image";
import React from "react";

function TodoList() {
  return (
    <>
      <h1>{`Hedy Lamarr's Todos`}</h1>
      <Image
        src={"https://i.imgur.com/yXOvdOSs.jpg"}
        alt="Hedy Lamarr"
        className="photo rounded-lg"
        width={100}
        height={100}
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

export default TodoList;
