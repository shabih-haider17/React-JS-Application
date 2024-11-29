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
      price: 10, // Update the price
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
      ...customer,
      address: {
        ...customer.address,
        zipcode: 79912,
      },
    });
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
    </div>
  );
}

export default App;
