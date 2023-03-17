import React from "react";
import Home from './pages/home/Home';
import List from './pages/list/List';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hotels from "./pages/hotel/Hotels";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
