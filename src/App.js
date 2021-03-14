import { useState, useContext } from 'react'
import logo from './logo.svg';
import { Header, SearchInput, ProfileCard } from './components'
import { UserContext } from './contexts'
import './App.css';

const App = () => {
  const { selectedUser } = useContext(UserContext)
  return (
    <div className="App">
      <Header />
      <SearchInput />
      {selectedUser.name && <ProfileCard />}
    </div>
  );
}

export default App;
