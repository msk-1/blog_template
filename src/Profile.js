import React from "react";
import "./App.css";
import Home from './components/Home';

function Profile() {
  return (
    <div className="Profile">
      <header className="Profile-header">
        <a
          className="Profile-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          title2
        </a>
        <Home/>
      </header>
    </div>
  );
}

export default Profile;
