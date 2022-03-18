import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PassagemService from "../../services/PassagemService";
import ClienteService from "../../services/ClienteService";
import ViagemService from "../../services/ViagemService";

export default function Create() {
  const [cliente, setCliente] = useState({id_Cliente : "", nome: ""});
  const [viagem, setViagem] = useState({id_Viagem : "", destino: ""});
  const [clientes, setClientes] = useState([]);
  const [viagens, setViagens] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllClientes = () => {
    ClienteService.getAllClientes()
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllClientes();
  }, []);

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


  const criarOuEditarPassagem = (e) => {
    e.preventDefault();

    const passagem = { cliente, viagem };

    if (id) {
      PassagemService.updatePassagem(id, passagem).then((response) => {
        navigate("/Passagens");
      });
    } else {
      PassagemService.createPassagem(passagem).then((response) => {
        navigate("/Passagens");
      });
    }
  };

  useEffect(() => {
    function getPassagem() {
      if (id) {
        PassagemService.getPassagem(id)
          .then((response) => {
            setCliente({ id_Cliente : response.data.cliente.id_Cliente, nome: response.data.cliente.nome });
            setViagem({ id_Viagem : response.data.viagem.id_Viagem, destino: response.data.viagem.destino });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getPassagem();
  }, [id]);

  return (
    <main>
      <div className="container py-3">
        <form className="d-flex justify-content-center">
          <fieldset>
            <legend>
              <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
            </legend>
            <div className="form-group mb-3">
              <label htmlFor="ClienteId_cliente" className="form-label">
                Cliente
              </label>
              <select
                id="ClienteId_cliente"
                name="ClienteId_cliente"
                className="form-select"
                onChange={(e) =>
                  setCliente({ id_Cliente: Number.parseInt(e.target.value) })
                }
              >
                <option value="DEFAULT" >{id ? cliente.nome : 'Escolha um cliente'}</option>
                {clientes.map((cliente) => (
                  <option key={cliente.id_Cliente} value={cliente.id_Cliente}>
                    {cliente.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="ViagemId_viagem" className="form-label">
                Viagem
              </label>
              <select
                id="ViagemId_viagem"
                name="ViagemId_viagem"
                className="form-select"
                onChange={(e) =>
                  setViagem({ id_Viagem: Number.parseInt(e.target.value) })
                }
              >
                <option value="DEFAULT" >{id ? viagem.destino : 'Escolha um viagem'}</option>
                {viagens.map((viagem) => (
                  <option key={viagem.id_Viagem} value={viagem.id_Viagem}>
                    {viagem.destino}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => criarOuEditarPassagem(e)}
            >
              Enviar
            </button>
            <Link
              to="/Passagens"
              className="btn btn-danger"
              style={{ marginLeft: "10px" }}
            >
              Cancelar
            </Link>
          </fieldset>
        </form>
      </div>
    </main>
  );
}