import React, { useEffect, useState } from "react";

// Define the User interface
interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const ProductLists = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const apiUrl =
      "https://7bdb64e9-a63a-4aca-a1be-f92e67b88970.mock.pstmn.io/users";

    fetch(apiUrl)
      .then((response) => response.json()) // Parse the JSON response
      .then((responseData) => {
        console.log("API Response:", responseData); // Log the response for debugging

        // Extract users array from the response data
        const usersData: User[] = responseData.data || []; // Adjust to match API response
        setUsers(usersData); // Update state with users
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>My API List</h1>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item justify-content-between">
            <p>
              <strong>Name:</strong> {`${user.firstName} ${user.lastName}`}
            </p>
            <p>
              <strong>Email:</strong> {user.email || "Email not available"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductLists;
