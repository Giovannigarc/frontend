import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { Link } from "react-router-dom";
import "../Styles/UsuarioStyle.css";
import {
  addUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarios,
} from "../Services/ServicoUsuario";

const UsuarioForm = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [valorRenda, setValorRenda] = useState("");
  const [cpf, setCpf] = useState("");
  const [editandoUsuario, setEditandoUsuario] = useState(null);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [usuarioDetalhes, setUsuarioDetalhes] = useState(null);

  useEffect(() => {
    carregarUsuarios();
    moment.locale("pt-br");
  }, []);

  const carregarUsuarios = async () => {
    try {
      const usuariosCarregados = await getUsuarios();
      setUsuarios(usuariosCarregados);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  const handleAddUsuario = async () => {
    try {
      if (!nomeCompleto || !dataNascimento || !valorRenda || !cpf) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      if (editandoUsuario) {
        await updateUsuario(editandoUsuario.id, {
          nomeCompleto,
          dataNascimento,
          valorRenda,
          cpf,
        });
        alert("Usuário atualizado com sucesso");
      } else {
        await addUsuario({ nomeCompleto, dataNascimento, valorRenda, cpf });
        alert("Usuário cadastrado com sucesso");
        const modal = document.querySelector(".modal");
        modal.classList.add("animacao-cadastro");
      }
      limparCampos();
      carregarUsuarios();
    } catch (error) {
      alert("Erro ao cadastrar usuário");
    }
  };

  const handleEditarUsuario = async (usuario) => {
    try {
      setNomeCompleto(usuario.nomeCompleto);
      setDataNascimento(usuario.dataNascimento);
      setValorRenda(usuario.valorRenda);
      setCpf(usuario.cpf);
      setEditandoUsuario(usuario);
    } catch (error) {
      alert("Erro ao editar usuário");
    }
  };

  const handleExcluirUsuario = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        await deleteUsuario(id);
        alert("Usuário excluído com sucesso");
        carregarUsuarios();
        limparCampos();
      } catch (error) {
        alert("Erro ao excluir usuário");
      }
    }
  };

  const handleMostrarDetalhes = (usuario) => {
    setUsuarioDetalhes(usuario);
    setMostrarDetalhes(true);
  };

  const limparCampos = () => {
    setNomeCompleto("");
    setDataNascimento("");
    setValorRenda("");
    setCpf("");
    setEditandoUsuario(null);
  };

  const formatarCPF = (value) => {
    const cpfFormatado = value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return cpfFormatado;
  };

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
      <div className="fundo2">
        <div className="cabecalho">
          <h2>Pagina de Cadastro</h2>
        </div>
        <div className="usuario-form-container">
          <label>Nome Completo:</label>
          <input
            type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
          <label>Valor da Renda:</label>
          <input
            type="text"
            value={valorRenda}
            onChange={(e) => setValorRenda(e.target.value)}
          />
          <label>CPF:</label>
          <input
            type="text"
            value={formatarCPF(cpf)}
            onChange={(e) => setCpf(e.target.value)}
          />
          <button className="atualizarEd" onClick={handleAddUsuario}>
            {editandoUsuario ? "Atualizar" : "Cadastrar"}
          </button>
          {editandoUsuario && (
            <button className="cancelarEd" onClick={limparCampos}>
              Cancelar Edição
            </button>
          )}
          <div className="grid-container">
            {usuarios.map((usuario) => (
              <div key={usuario.id} className="grid-item">
                <span>{usuario.nomeCompleto}</span>
                <button
                  className="detalhes"
                  onClick={() => handleMostrarDetalhes(usuario)}
                >
                  Detalhes
                </button>
                <button
                  className="editar"
                  onClick={() => handleEditarUsuario(usuario)}
                >
                  Editar
                </button>
                <button
                  className="excluir"
                  onClick={() => handleExcluirUsuario(usuario.id)}
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={mostrarDetalhes ? "modal active" : "modal"}>
          <div className="modal-content">
            <span className="close" onClick={() => setMostrarDetalhes(false)}>
              X
            </span>
            <h2>Detalhes do Usuário</h2>
            {usuarioDetalhes && (
              <div>
                <p>Nome: {usuarioDetalhes.nomeCompleto}</p>
                <p>
                  Data de Nascimento:{" "}
                  {moment(usuarioDetalhes.dataNascimento).format("DD/MM/YYYY")}
                </p>
                <p>Valor da Renda: {usuarioDetalhes.valorRenda}</p>
                <p>CPF: {formatarCPF(usuarioDetalhes.cpf)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioForm;
