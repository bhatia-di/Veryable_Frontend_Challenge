import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { UserListComponent } from './components/UserList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <UserListComponent/>
      </div>
    </div>
  );
}

export default App;
