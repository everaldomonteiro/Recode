package br.com.crud.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.com.crud.factory.ConnectionFactory;
import br.com.crud.model.Viagem;

public class ViagemDAO {
	
	public void save(Viagem viagem) {
		/*
		 * Isso � uma sql comum, os ? s�o os par�metros que n�s vamos adicionar na base
		 * de dados
		 */

		String sql = "INSERT INTO Viagem(Destino, Data, Origem, Hora)" + "VALUES(?,?,?,?)";

		Connection conn = null;
		PreparedStatement pstm = null;

		try {
			// Cria uma conex�o com o banco
			conn = ConnectionFactory.createConnectionSQLServer();

			// Cria um PreparedStatement, classe usada para executar a query
			pstm = conn.prepareStatement(sql);

			// Adicionar o valor do primeiro par�metro da sql
			pstm.setString(1, viagem.getDestino());

			// Adicionar o valor do segundo par�metro da sql
			pstm.setDate(2, new Date( viagem.getData().getTime()));

			// Adicionar o valor do terceiro par�metro da sql
			pstm.setString(3, viagem.getOrigem());
			
			// Adicionar o valor do quarto par�metro da sql
			pstm.setString(4, viagem.getOrigem());
			
			// Executar a sql para inser��o dos dados
			pstm.execute();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// fecha as conex�es
			try {
				if (pstm != null) {
					pstm.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public void removeById(int id) {
		String sql = "DELETE FROM Viagem WHERE Id = ?";

		Connection conn = null;
		PreparedStatement pstm = null;

		try {
			conn = ConnectionFactory.createConnectionSQLServer();

			pstm = conn.prepareStatement(sql);

			pstm.setInt(1, id);

			pstm.execute();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstm != null) {
					pstm.close();
				}

				if (conn != null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public void update(Viagem viagem) {
		String sql = "UPDATE Viagem SET Destino = ?, Data = ?, Origem = ?, Hora = ? WHERE id = ?";

		Connection conn = null;
		PreparedStatement pstm = null;

		try {
			// Cria uma conex�o com o banco
			conn = ConnectionFactory.createConnectionSQLServer();

			// Cria um PreparedStatement, classe usada para executar a query
			pstm = conn.prepareStatement(sql);

			// Adiciona o valor do primeiro par�metro da sql
			pstm.setString(1, viagem.getDestino());

			// Adicionar o valor do segundo par�metro da sql
			pstm.setDate(2, new Date( viagem.getData().getTime()));

			// Adicionar o valor do terceiro par�metro da sql
			pstm.setString(3, viagem.getOrigem());
			
			// Adicionar o valor do quarto par�metro da sql
			pstm.setString(4, viagem.getOrigem());

			// Adicionar o valor do quinto par�metro da sql
			pstm.setInt(5, viagem.getID_Viagem());

			// Executa a sql para inser��o dos dados
			pstm.execute();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// Fecha as conex�es
			try {
				if (pstm != null) {
					pstm.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public List<Viagem> getViagems() {

		String sql = "SELECT * FROM Viagem";

		List<Viagem> viagems = new ArrayList<Viagem>();

		Connection conn = null;
		PreparedStatement pstm = null;

		// Classe que vai recuperar os dados do banco de dados
		ResultSet rset = null;

		try {
			conn = ConnectionFactory.createConnectionSQLServer();

			pstm = conn.prepareStatement(sql);

			rset = pstm.executeQuery();

			// Enquanto existir dados no banco de dados, fa�a
			while (rset.next()) {
				Viagem viagem = new Viagem();

				// Recupera o id do banco e atribui ele ao objeto
				viagem.setID_Viagem(rset.getInt("ID_Viagem"));

				// Recupera o nome do banco e atribui ele ao objeto
				viagem.setDestino(rset.getString("Destino"));

				// Recupera a idade do banco e atribui ele ao objeto
				viagem.setData(rset.getDate("Data"));

				// Adiciona o contato recuperado, a lista de contatos
				viagems.add(viagem);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (rset != null) {
					rset.close();
				}
				if (pstm != null) {
					pstm.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return viagems;
	}
}
