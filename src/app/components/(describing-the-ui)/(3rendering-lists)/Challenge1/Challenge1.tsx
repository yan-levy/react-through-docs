import { people } from "@/app/public/data/data";
import { getImageUrl } from "@/app/utils/utils";

let chemists: any[] = [];
let everyoneElse: any[] = [];
people.forEach((person) => {
  if (person.profession === "chemist") {
    chemists.push(person);
  } else {
    everyoneElse.push(person);
  }
});

function ListSection({ title, people }: any) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person: any) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Challenge1() {
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Everyone Else" people={everyoneElse} />
    </article>
  );
}
