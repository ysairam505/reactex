
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import React from "react";
import { UserList } from "./features/users/UserList";

export default function App() {
  return (
        <Router>
          <div className="App">
            <header className="App-header">

            <Routes>
            <Route path="/add-user" element={<AddUser/>}></Route>
            <Route path="/edit-user/:id" element={<EditUser/>}></Route>
            <Route path="/" element={<UserList/>}></Route>
            </Routes> 
            </header>
          </div>
        </Router>
  );
}
