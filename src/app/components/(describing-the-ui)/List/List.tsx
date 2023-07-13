import { people } from "@/app/public/data/data";
import { getImageUrl } from "@/app/utils/utils";
import Image from "next/image";
import React from "react";

function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <Image
        src={getImageUrl(person)}
        alt={person.name}
        width={100}
        height={100}
      />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export default List;
