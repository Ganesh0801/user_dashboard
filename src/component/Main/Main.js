import React, { useState } from 'react';
import "./Main.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import UserList from "../UserList/UserList";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Main = ({ users, setUsers, isEditing, setIsEditing, editUser, setEditUser }) => {
  const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", department: "" });
  const [error, setError] = useState(""); 
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    department: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const errors = {};
    let hasError = false;
    if (!newUser.firstName) {
      errors.firstName = true;
      hasError = true;
    }
    if (!newUser.lastName) {
      errors.lastName = true;
      hasError = true;
    }
    if (!newUser.email) {
      errors.email = true;
      hasError = true;
    }
    if (!newUser.department) {
      errors.department = true;
      hasError = true;
    }

  
    const userExists = users.some(
      (user) =>
        user.firstName.toLowerCase() === newUser.firstName.toLowerCase() &&
        user.lastName.toLowerCase() === newUser.lastName.toLowerCase()
    );

    if (userExists) {
      setError("A user with this name already exists.");
      setFieldErrors({});
      setOpenSnackbar(true);
      return;
    }

    if (hasError) {
      setFieldErrors(errors);
      setError("Please fill out all fields.");
      setOpenSnackbar(true);
      return;
    }

    const newUserObj = {
      id: Math.floor(Math.random() * 1000),
      ...newUser,
    };

    setUsers([...users, newUserObj]);
    setNewUser({ firstName: "", lastName: "", email: "", department: "" });
    setFieldErrors({
      firstName: false,
      lastName: false,
      email: false,
      department: false,
    });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const errors = {};
    let hasError = false;
    if (!newUser.firstName) {
      errors.firstName = true;
      hasError = true;
    }
    if (!newUser.lastName) {
      errors.lastName = true;
      hasError = true;
    }
    if (!newUser.email) {
      errors.email = true;
      hasError = true;
    }
    if (!newUser.department) {
      errors.department = true;
      hasError = true;
    }

    if (hasError) {
      setFieldErrors(errors);
      setError("Please fill out all fields.");
      setOpenSnackbar(true);
      return;
    }

    const updatedUser = { ...editUser, ...newUser };
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setNewUser({ firstName: "", lastName: "", email: "", department: "" });
    setFieldErrors({
      firstName: false,
      lastName: false,
      email: false,
      department: false,
    });
    setIsEditing(false);
    setEditUser(null);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleEditUser = (user) => {
    setIsEditing(true);
    setEditUser(user);
    setNewUser({ firstName: user.firstName, lastName: user.lastName, email: user.email, department: user.department });
  };

  return (
    <>
      <div className="userForm">
        <div className="container">
          <form onSubmit={isEditing ? handleSaveEdit : handleAddUser}>
            <div className="inputBox">
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                name="firstName"
                value={newUser.firstName}
                onChange={handleInputChange}
                error={fieldErrors.firstName}
                helperText={fieldErrors.firstName ? "First name is required." : ""}
              />
            </div>
            <div className="inputBox">
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                name="lastName"
                value={newUser.lastName}
                onChange={handleInputChange}
                error={fieldErrors.lastName}
                helperText={fieldErrors.lastName ? "Last name is required." : ""}
              />
            </div>
            <div className="inputBox">
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                error={fieldErrors.email}
                helperText={fieldErrors.email ? "Email is required." : ""}
              />
            </div>
            <div className="inputBox">
              <TextField
                label="Department"
                variant="outlined"
                fullWidth
                name="department"
                value={newUser.department}
                onChange={handleInputChange}
                error={fieldErrors.department}
                helperText={fieldErrors.department ? "Department is required." : ""}
              />
            </div>
            <div className="butt">
              <Button variant="contained" type="submit">
                {isEditing ? "Save Changes" : "Add User"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {error}
        </Alert>
      </Snackbar>

      {users.length > 0 && <UserList users={users} setUsers={setUsers} handleEditUser={handleEditUser} />}
    </>
  );
};

export default Main;



