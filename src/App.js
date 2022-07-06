import React from "react";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import { Todos  , Add } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Link to="/todos"> todos </Link>
        <Link to="/add-todo"> add-todo </Link>
        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="/add-todo" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
