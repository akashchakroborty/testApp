import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from "./components/logo.component";
import MainPage from './components/mainPage';
import SideBar from './components/sideBar.component';

function App() {
  return (
    <div className="App">
      <div className="SideBar">
      <Logo/>
      <SideBar/>
      </div>
      <MainPage/>
    </div>
  );
}

export default App;
