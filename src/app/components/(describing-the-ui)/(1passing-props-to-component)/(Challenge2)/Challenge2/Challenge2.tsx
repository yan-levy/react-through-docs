import { getImageUrl } from "@/app/utils/utils";

function Avatar({ person, size }: any) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, (size = "b"))}
      alt={person.name}
      width={size < 90 ? "s" : "b"}
      height={size < 90 ? "s" : "b"}
    />
  );
}

export default function Challenge2() {
  return (
    <>
      <h1>
        {`I got the gist, but quite doesn't did the challenge, because is too easy`}
      </h1>
      <Avatar
        size={1}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}
