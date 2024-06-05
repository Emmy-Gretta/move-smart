import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landin";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/dashboards/Dashboard";
import SearchResults from "./pages/dashboards/SearchResults";
import Notifications from "./pages/dashboards/Notifications";
import YourTickets from "./pages/dashboards/YourTickets";
import Settings from "./pages/dashboards/Settings";
import Myprofile from "./components/Settings/Myprofile";
import Password from "./components/Settings/Password";
import Linkcard from "./components/Settings/Linkcard";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/yourtickets" element={<YourTickets />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/myprofile" element={<Myprofile />} />
        <Route path="/settings/password" element={<Password />} />
        <Route path="/settings/linkcard" element={<Linkcard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
