import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/Home";
import Profil from "./components/Profil";
import Setting from "./components/Setting";
import React from 'react'

const Page = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/profil" element={<Home />} />
        <Route path='/home' element={<Profil />}/>
        <Route path="/home/setting" element={ <Setting  />}/>
        </Route>{" "}
      </Routes>
    </div>
  )
}

export default Page;
