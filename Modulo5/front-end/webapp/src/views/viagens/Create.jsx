import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViagemService from "../../services/ViagemService";

export default function Create() {
  const [destino, setDestino] = useState("");
  const [origem, setOrigem] = useState("");
  const [partida, setPartida] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarViagem = (e) => {
    e.preventDefault();

    const viagem = { destino, origem, partida };

    if (id) {
      ViagemService.updateViagem(id, viagem).then((response) => {
        navigate("/Viagens");
      });
    } else {
      ViagemService.createViagem(viagem).then((response) => {
        navigate("/Viagens");
      });
    }
  };

  useEffect(() => {
    function getViagem() {
      if (id) {
        ViagemService.getViagem(id)
          .then((response) => {
            setDestino(response.data.destino);
            setOrigem(response.data.origem);
            setPartida(response.data.partida);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getViagem();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="destino" className="form-label">
              Destino
            </label>
            <input
              type="text"
              id="destino"
              className="form-control"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="origem" className="form-label">
              Origem
            </label>
            <input
              type="text"
              id="origem"
              className="form-control"
              placeholder="Origem"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="partida" className="form-label">
              Partida
            </label>
            <input
              type="text"
              id="partida"
              className="form-control"
              placeholder="Partida"
              value={partida}
              onChange={(e) => setPartida(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarViagem(e)}
          >
            Enviar
          </button>
          <Link
            to="/Viagens"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}