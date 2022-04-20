package br.com.crud.teste;

import br.com.crud.dao.ClienteDAO;
import br.com.crud.model.Cliente;

public class TesteCrud {

	public static void main(String[] args) {
		ClienteDAO clienteDAO = new ClienteDAO();
		
		// ------------ Cria um contato e salva no banco
		Cliente cliente = new Cliente();
		cliente.setNome("joao");
		cliente.setIdade(30);
		cliente.setTelefone("1231231231");
		
		clienteDAO.save(cliente);
		
		// ------------ Atualiza o contato com id = 1 com os dados do objeto contato1
		/*Contato contato1 = new Contato();
		contato1.setId(1);
		contato1.setNome("Izadora");
		contato1.setIdade(25);
		contato1.setDataCadastro(new Date());
		
		clienteDAO.update(contato1);*/
		
		// ------------ Remove o contato com id
		// contatoDAO.removeById(2);
		
		// ------------ Lista todos os contatos do banco de dados
		for (Cliente c : clienteDAO.getClientes()) {
			System.out.println("Nome: " + c.getNome());
		}
	}
}
