import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./Pages/PaginaInicial";
import Cadastro from "./Pages/Cadastro";
import Informacoes from "./Pages/Informacoes";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/informacoes" element={<Informacoes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
