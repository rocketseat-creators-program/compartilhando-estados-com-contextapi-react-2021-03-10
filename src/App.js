import { useState } from 'react'
import logo from './logo.svg';
import { Header, SearchInput, ProfileCard } from './components'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <ProfileCard />
    </div>
  );
}

export default App;
