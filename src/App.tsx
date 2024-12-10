import Message from "./Message";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";
import produce from "immer";
import { useEffect, useRef } from "react";
import ProductLists from "./components/ProductLists";
import axios, { CanceledError } from "axios";

const connect = () => console.log("Connecting...");

const disconnect = () => console.log("Disconnecting...");

interface User {
  id: number;
  name: string;
}
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
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "My App";
  });
  const [category, setCategory] = useState("");

  useEffect(() => {
    connect();

    return () => disconnect();
  });
  const [users, SetUsers] = useState<User[]>([]);
  const [error, SetError] = useState("");
  const [isLoading, SetLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    SetLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        SetUsers(res.data);
        SetLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        SetError(err.message);
        SetLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const OriginalUsers = [...users];
    SetUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((err) => {
        SetError(err.message);
        SetUsers(OriginalUsers);
      });
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
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick5}>Fix Bug 1</button>
      <br />
      <br />
      <input type="text" className="form-control" />
      <br />
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductLists />
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-booter"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
