import {useEffect, useState} from 'react';
import './App.css';
import { fetchUsers } from './services/services';
import UserCard from './userCard/userCard.component';
import UsersList from './usersList/usersList.component';

function App() {

  const [users, setUsers]=useState([[]]);

  useEffect(function(){
    fetchUsers()
    .then(res=>setUsers(res.data.results))
    .catch(console.log)
  },[]);

  return (
    <div className="App">
     <UsersList users={users}/>
    </div>
  );
}

export default App;
