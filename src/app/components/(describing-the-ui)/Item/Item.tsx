import React from "react";

interface ItemProps {
  name: string;
  isPacked: boolean;
}

const Item: React.FC<ItemProps> = ({ name, isPacked }) => {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
};

export default Item;
