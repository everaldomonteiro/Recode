import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ViagemService from "../../services/ViagemService";

export default function Index() {
  const [viagens, setViagens] = useState([]);

  const getAllViagens = () => {
    ViagemService.getAllViagens()
      .then((response) => {
        setViagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllViagens();
  }, []);

  const deleteViagem = (viagemId) => {
    ViagemService.deleteViagem(viagemId)
      .then((response) => {
        getAllViagens();
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
          <h1 className="container">Cadastro Viagem</h1>
        </header>
        <div className="container py-3">
          <Link to="/Viagens-Create" className="btn btn-primary mb-2">
            Criar Viagem
          </Link>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Partida</th>
                  <th>Destino</th>
                  <th>Origem</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {viagens.map((viagem) => (
                  <tr key={viagem.id_Viagem}>
                    <td>{viagem.id_Viagem}</td>
                    <td>{viagem.partida}</td>
                    <td>{viagem.destino}</td>
                    <td>{viagem.origem}</td>
                    <td className="d-flex">
                      <Link
                        to={`/Viagens-Update/${viagem.id_Viagem}`}
                        className="btn btn-info"
                      >
                        Editar
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteViagem(viagem.id_Viagem)}
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