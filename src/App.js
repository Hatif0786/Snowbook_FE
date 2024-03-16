import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/Note/NoteState";
import "./components/css/Home.css"
import Register from "./components/Register";
import UserState from "./context/User/UserState";
import Login from "./components/Login";

function App() {
  return (
    <UserState>
    <NoteState>
      <Router>
        <Navbar />
         <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
         </div>
      </Router>
    </NoteState>
    </UserState>
  );
}

export default App;
