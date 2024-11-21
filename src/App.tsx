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
  return (
    <div>
      <Message></Message>
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
    </div>
  );
}

export default App;
