import Challenge2 from "@/app/components/(describing-the-ui)/(4keeping-components-pure)/Challenge2/Challenge2";
import React from "react";

function page() {
  return (
    <>
      <Challenge2
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Challenge2
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </>
  );
}

export default page;
