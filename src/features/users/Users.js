import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";



function Users() {
//let state
const userList = useSelector((state) => {
  return state.users.map((user) => <li>{user.username} is from {user.hometown}.</li>)
})

const amtOfUsers = useSelector((state) => state.users.length)



  return (
    <div>
      <ul>
        Users!
        {userList}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        Total Users:  {amtOfUsers}.
      </ul>
    </div>
  );
}

export default Users;
