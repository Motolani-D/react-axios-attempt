import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";

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
  return (
    <div>
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

          <UserList Users={Users} />
        </table>
      </div>
    </div>
  );
}

export default App;
