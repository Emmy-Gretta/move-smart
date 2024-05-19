import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landin";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
