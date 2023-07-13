/* eslint-disable @next/next/no-img-element */

import { getImageUrl } from "@/app/utils/utils";

function Profile({ name, imageId, size, profession, awards, discover }: any) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl({ imageId })}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discover}
        </li>
      </ul>
    </section>
  );
}

export default function Challenge() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Skłodowska-Curie"}
        imageId={"szV5sdG"}
        size={100}
        profession={"physicist and chemist"}
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal, Matteucci Medal",
        ]}
        discover={"polonium (element)"}
      />

      <Profile
        name={"Katsuko Saruhashi"}
        imageId={"YfeOqp2"}
        size={100}
        profession={"geochemist"}
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discover={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
