import Message from "./Message";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
function App() {
  let items = ["Karachi", "Lahore", "Peshawar", "Quetta", "Islamabad"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
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
      <Alert>
        !!!DANGER!!!<br></br>
        <span> RUN AWAY</span>
      </Alert>
      <h4>Button Component</h4>
      <Button OnClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default App;
