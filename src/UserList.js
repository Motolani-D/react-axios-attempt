import React from "react";

const UserList = (props) => {
  return (
    <>
      {props.Users.map((Users, index) => (
        <tr>
          <td>{Users.name}</td>
          <td>{Users.username}</td>
          <td>{Users.email}</td>
          <td>{Users.phone}</td>
          <td>{Users.website}</td>
        </tr>
      ))}
    </>
  );
};

export default UserList;
