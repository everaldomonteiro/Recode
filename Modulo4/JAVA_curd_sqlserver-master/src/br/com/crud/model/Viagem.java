package br.com.crud.model;
import java.util.Date;

//import java.sql.Date;
//import java.sql.Time;

public class Viagem {
	private int ID_Viagem;
	private String Destino;
	private Date Data;
	private String Origem;
	private Date Hora;
	
	public int getID_Viagem() {
		return ID_Viagem;
	}
	public void setID_Viagem(int iD_Viagem) {
		ID_Viagem = iD_Viagem;
	}
	public String getDestino() {
		return Destino;
	}
	public void setDestino(String destino) {
		Destino = destino;
	}
	public Date getData() {
		return Data;
	}
	public void setData(Date data) {
		Data = data;
	}
	public String getOrigem() {
		return Origem;
	}
	public void setOrigem(String origem) {
		Origem = origem;
	}
	public Date getHora() {
		return Hora;
	}
	public void setHora(Date hora) {
		Hora = hora;
	}
	
}

