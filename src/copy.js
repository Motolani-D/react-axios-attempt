import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    //as soon as i did this and added a log, i could see the object in my user console.
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const userList = Users.map((Users, index) => {
    return (
      <tr>
        <td>{Users.name}</td>
        <td>{Users.username}</td>
        <td>{Users.email}</td>
        <td>{Users.phone}</td>
        <td>{Users.website}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h2>User List</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th> Phone no</th>

          <th>Website</th>
        </tr>

        {userList}
      </table>
    </div>
  );
}

export default App;
