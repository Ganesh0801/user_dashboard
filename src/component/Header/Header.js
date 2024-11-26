import { useState, useEffect } from 'react';
import "./Header.css";
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import Brightness5RoundedIcon from '@mui/icons-material/Brightness5Rounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

const Header = () => {
  const [bright, setBright] = useState(true); 

  
  useEffect(() => {
    if (bright) {
      document.body.classList.remove('dark-mode'); 
    } else {
      document.body.classList.add('dark-mode'); 
    }
  }, [bright]);

  const handleClick = () => {
    setBright(!bright); 
  };

  return (
    <div className="head">
      <div><FolderCopyRoundedIcon /></div>
      <h2>User Dashboard</h2>
      <div className="list">
        <NotificationsNoneRoundedIcon />
        <Person2RoundedIcon />
        {bright ? (
          <Brightness4RoundedIcon onClick={handleClick} />
        ) : (
          <Brightness5RoundedIcon onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default Header;
