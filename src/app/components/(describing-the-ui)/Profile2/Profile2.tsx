import Image from "next/image";
import React from "react";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function Profile2() {
  return (
    <div style={person.theme}>
      <h1>{`${person.name}'s Todos`}</h1>
      <Image
        src={"https://i.imgur.com/7vQD0fPs.jpg"}
        alt="Gregorio Y. Zara"
        width={100}
        height={100}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare the aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default Profile2;
