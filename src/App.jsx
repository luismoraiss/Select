import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyComponent from "./App/Select.jsx";  
import Professores from "./Professores.jsx"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <BrowserRouter>
        <Route path="/" element={<MyComponent />} />
        <Route path="/professores/:id" element={<Professores />} />
        </BrowserRouter>
      </Routes>
    </Router>
  );
};

export default App;
