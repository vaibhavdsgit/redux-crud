import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import "./App.css";

import { addUser, deleteUser, updateUsername } from './features/Users';

function App() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
      <div className='addUser'>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="Enter user name" onChange={(e)=>setUsername(e.target.value)}/>
        <button type="submit" onClick={() => dispatch(addUser({ id: userList[userList.length-1].id+1, name, username }))}>Add User</button> {/* name: name, username: username => shorthand */}
      </div>
      <div className='displayUsers'>
        {
          userList.map((user)=>{
            return <div>
              <h2>{user.name}</h2>
              <h3>{user.username}</h3>
              <input type='text' placeholder='New Username' onChange={(event)=>{setNewUsername(event.target.value)}}/>
              <button onClick={()=>dispatch(updateUsername({id: user.id, username: newUsername}))}>Update Username</button>
              <button onClick={()=>dispatch(deleteUser({id: user.id}))}>Delete User</button>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
