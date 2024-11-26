import React from 'react';
import Button from '@mui/material/Button';
import "./UserList.css"
const UserList = ({ users, setUsers, handleEditUser }) => {

    const handleDeleteUser = (userId) => {
      setUsers(users.filter(user => user.id !== userId));
    };
  
    return (
        <>
        <h1>User List</h1>
         <div className="userList">
        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.department}</td>
                <td>
                  <Button onClick={() => handleEditUser(user)} variant="outlined">Edit</Button>
                  <Button onClick={() => handleDeleteUser(user.id)} variant="outlined" color="error">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    
    );
  }
  
  export default UserList;