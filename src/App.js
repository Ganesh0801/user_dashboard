import React, { useState } from 'react';
import Header from "../src/component/Header/Header";
import Main from "../src/component/Main/Main";
import Footer from "../src/component/Footer/Footer"

const App = () => {
  const [users, setUsers] = useState([]); 
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(null); 

  return (
    <>
      <Header />
      <Main
        users={users}
        setUsers={setUsers}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editUser={editUser}
        setEditUser={setEditUser}
      />
      <Footer text={"User Dashboard Management"} />
    </>
  );
}

export default App;
