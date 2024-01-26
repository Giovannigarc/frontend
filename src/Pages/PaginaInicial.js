import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PaginaInicial.css";

const PaginaInicial = () => {
  return (
    <div>
      <div className="header">
        <div className="navbar">
          <Link to="/">Pagina Inicial</Link>
          <Link to="/cadastrar">Cadastrar</Link>
          <Link to="/informacoes">Informações</Link>
          <p>Desenvolvido por Giovanni Garcia @MtxTecnologia 2024.</p>
        </div>
      </div>
      <div className="fundo">
        <div className="content">
          <h2>Bem-vindo ao cadastroBR</h2>
          <p>
            Aqui você pode começar a cadastrar pessoas físicas de forma simples
            e rápida.
          </p>
          <Link to="/cadastrar">
            <button>Iniciar Cadastro</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
