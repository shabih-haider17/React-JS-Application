import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectitem: (item: string) => void; // Callback function for item selection
}

function ListGroup({ items, heading, onSelectitem }: Props) {
  const [selectedindex, setselectedindex] = useState(-1);

  return (
    <>
      <h3>{heading}</h3>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedindex(index); // Update the selected index
              onSelectitem(item); // Call the function with the selected item
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
