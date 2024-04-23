import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import Jobs from "./Components/Jobs";
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<ProtectedRoute Component ={Home}/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/jobs' element={<ProtectedRoute Component ={Jobs}/>}/>

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
