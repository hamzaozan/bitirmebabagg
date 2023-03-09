import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import CreationPage from "./Components/Pages/CreationPage";
import HomePage from "./Components/Pages/HomePage";
import Templates from "./Components/Pages/Templates";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/creation' element={<CreationPage />} />
        <Route path='/templates' element={<Templates/>}/>
      </Routes>
    </Router>
  );
}

export default App;

