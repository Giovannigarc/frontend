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
          <h2>Sobre o cadastroBR</h2>
          <p>
            Aqui voce tem algumas informações sobre como nosso sistema funciona:
            Utilizamos uma Aplicação WEB Api Asp.Net Core, para realizar toda
            estrutura do nosso back-end, incluindo Dapper, Padrões de projetos e
            injeção de Dependencia para um melhor desempenho e uma boa
            visualização do Codigo, Nosso banco de dados foi estruturado com SQL
            Server e por fim o front-end feito em React, onde consumimos a Nossa
            API via AXIOS, sempre respeitando todas regras de inserção de dados
            no nosso banco.
          </p>
          <Link to="/">
            <button>Clique aqui para voltar ao Inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
