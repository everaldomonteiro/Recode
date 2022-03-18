import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClienteService from '../../services/ClienteService';

export default function Index() {
    const [clientes, setClientes] = useState([]);

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

    const deleteCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId)
            .then((response) => {
                getAllClientes();
            })
            .catch((error) => {
                console.log(error);
                const { data } = error.response;
                if (data.status === 500) {
                    alert('Erro na API');
                }
            });
    };

    return (
        <main>
            <header className="header">
                <h1 className="container">Cadastro Cliente</h1>
            </header>
            <div className="container p-5">
                <Link to="/Clientes-Create" className="btn btn-primary mb-2">
                    Criar Cliente
                </Link>
                <div className="table-responsive">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente) => (
                                <tr key={cliente.id_Cliente}>
                                    <td>{cliente.id_Cliente}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.telefone}</td>
                                    <td className="d-flex">
                                        <Link
                                            to={`/Clientes-Update/${cliente.id_Cliente}`}
                                            className="btn btn-info"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                deleteCliente(cliente.id_Cliente)
                                            }
                                            style={{ marginLeft: '10px' }}
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
    );
}
