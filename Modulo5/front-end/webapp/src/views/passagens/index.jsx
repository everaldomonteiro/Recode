import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PassagemService from "../../services/PassagemService";

export default function Index() {
  const [passagens, setPassagens] = useState([]);

  const getAllPassagens = () => {
    PassagemService.getAllPassagens()
      .then((response) => {
        setPassagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPassagens();
  }, []);

  console.log(passagens);

  const deletePassagem = (passagemId) => {
    PassagemService.deletePassagem(passagemId)
      .then((response) => {
        getAllPassagens();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <main>
        <header className="header">
          <h1 className="container">Cadastro Passagem</h1>
        </header>
        <div className="container py-3">
          <Link to="/Passagens-Create" className="btn btn-primary mb-2">
            Criar Passagem
          </Link>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Cliente</th>
                  <th>Viagem</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {passagens.map((passagem) => (
                  <tr key={passagem.id}>
                    <td>{passagem.id}</td>
                    <td>{passagem.cliente.nome}</td>
                    <td>{passagem.viagem.destino}</td>
                    <td className="d-flex">
                      <Link
                        to={`/Passagens-Update/${passagem.id}`}
                        className="btn btn-info"
                      >
                        Editar
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => deletePassagem(passagem.id)}
                        style={{ marginLeft: "10px" }}
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}