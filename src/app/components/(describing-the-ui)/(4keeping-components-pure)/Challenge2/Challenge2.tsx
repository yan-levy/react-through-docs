import { getImageUrl } from "@/app/utils/utils";
import Panel from "./Panel";

export default function Challenge2({ person }: any) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }: any) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }: any) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
