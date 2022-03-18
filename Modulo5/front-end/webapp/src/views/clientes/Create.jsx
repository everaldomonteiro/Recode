import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClienteService from '../../services/ClienteService';

export default function Create() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarCliente = (e) => {
        e.preventDefault();

        const cliente = { nome, cpf, telefone };

        if (id) {
            ClienteService.updateCliente(id, cliente).then((response) => {
                navigate('/Clientes');
            });
        } else {
            ClienteService.createCliente(cliente).then((response) => {
                navigate('/Clientes');
            });
        }
    };

    useEffect(() => {
        function getCliente() {
            if (id) {
                ClienteService.getCliente(id)
                    .then((response) => {
                        setNome(response.data.nome);
                        setCpf(response.data.cpf);
                        setTelefone(response.data.telefone);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
        getCliente();
    }, [id]);

    return (
        <main>
            <div className="container py-3">
                <form>
                    <fieldset>
                        <legend>
                            <h2 className="text-center">
                                {id ? 'Editar' : 'Criar'}
                            </h2>
                        </legend>
                        <div className="mb-3">
                            <label htmlFor="Nome" className="form-label">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="Nome"
                                className="form-control"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cpf" className="form-label">
                                CPF
                            </label>
                            <input
                                type="text"
                                id="cpf"
                                className="form-control"
                                placeholder="CPF"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="telefone" className="form-label">
                                Telefone
                            </label>
                            <input
                                type="text"
                                id="telefone"
                                className="form-control"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(e) => criarOuEditarCliente(e)}
                        >
                            Enviar
                        </button>
                        <Link
                            to="/Clientes"
                            className="btn btn-danger"
                            style={{ marginLeft: '10px' }}
                        >
                            Cancelar
                        </Link>
                    </fieldset>
                </form>
            </div>
        </main>
    );
}
