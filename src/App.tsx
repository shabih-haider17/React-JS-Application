import Message from "./Message";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  let items = ["Karachi", "Lahore", "Peshawar", "Quetta", "Islamabad"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertvisible, Setalertvisiblity] = useState(false);

  const [isVisible, SetVisiblity] = useState(false);
  const handleClick = () => {
    SetVisiblity(true);
    console.log(isVisible);
  };
  const [drink, setDrink] = useState({
    title: "Capuccino",
    price: 5,
  });

  const handleClick2 = () => {
    const newDrink = {
      ...drink,
      price: 15, // Update the price
    };
    setDrink(newDrink); // Update the state
  };
  const [customer, SetCustomer] = useState({
    name: "Shabih",
    address: {
      city: "Karachi",
      zipcode: 79905,
    },
  });
  const handleClick3 = () => {
    SetCustomer({
      name: "Shazil",
      address: {
        ...customer.address,
        zipcode: 79912,
        city: "Lahore",
      },
    });
  };
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick4 = () => {
    setTags((prevTags) => {
      let updatedTags = [...prevTags, "exciting"]; // Add "exciting"
      updatedTags = updatedTags.filter((tag) => tag !== "happy"); // Remove "happy"
      updatedTags = updatedTags.map((tag) =>
        tag === "cheerful" ? "cheering" : tag
      ); // Replace "cheerful" with "cheering"
      return updatedTags;
    });
  };
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);
  const handleClick5 = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <Message></Message>
      {/* <Message></Message>
      <Message></Message> */}
      <h4>List Component</h4>
      <ListGroup
        items={items}
        heading={"Cities Of Pakistan"}
        onSelectitem={handleSelectItem}
      />
      <h4>Alert Component</h4>
      {alertvisible && (
        <Alert onClose={() => Setalertvisiblity(false)}>
          !!MY BUTTON!!<br></br>
        </Alert>
      )}
      <h4>Button Component</h4>
      <Button OnClick={() => Setalertvisiblity(true)}>My Button</Button>
      <br />
      <br />
      <button onClick={handleClick}>Show</button>
      <p>{drink.price}</p> {/* Display the current price */}
      <button onClick={handleClick2}>Click Me</button>
      <p>
        Name:{customer.name}
        <br />
        City: {customer.address.city}
        <br />
        Zipcode: {customer.address.zipcode}
      </p>
      <button onClick={handleClick3}>Click Me</button>
      {tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
      <button onClick={handleClick4}>Update Tags</button>
      <br />
      {bugs[0].title} - {bugs[0].fixed ? "Fixed" : "Not Fixed"} <br />
      {bugs[1].title} - {bugs[1].fixed ? "Fixed" : "Not Fixed"} <br />
      <button onClick={handleClick5}>Fix Bug 1</button>
    </div>
  );
}

export default App;
