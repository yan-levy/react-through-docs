/* eslint-disable @next/next/no-img-element */
import { getImageUrl } from "@/app/utils/utils";
import React from "react";

function Profile3() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }: any) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }: any) {
  return <div className="card">{children}</div>;
}

export default Profile3;
