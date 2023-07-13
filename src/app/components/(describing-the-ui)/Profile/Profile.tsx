import Image from "next/image";

function Profile() {
  return (
    <Image
      className="avatar"
      src={"https://i.imgur.com/MK3eW3As.jpg"}
      alt={"Katherine Johnson"}
      width={100}
      height={100}
    />
  );
}

export default Profile;
