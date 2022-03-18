package com.agencia.agenciaViagem.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Viagem implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_Viagem;
	private String Partida;
	private String Destino;
	private String Origem;
	
	@JsonIgnore
	@OneToMany(mappedBy = "viagem")
	private List<Passagem> passagens = new ArrayList<Passagem>();
	
	public Viagem() {
		super();
	}

	public Viagem(Long id_Viagem, String partida, String destino, String origem) {
		super();
		this.Id_Viagem = id_Viagem;
		this.Partida = partida;
		this.Destino = destino;
		this.Origem = origem;
	}

	public Long getId_Viagem() {
		return Id_Viagem;
	}

	public void setId_Viagem(Long id_Viagem) {
		Id_Viagem = id_Viagem;
	}

	public String getPartida() {
		return Partida;
	}

	public void setPartida(String partida) {
		Partida = partida;
	}

	public String getDestino() {
		return Destino;
	}

	public void setDestino(String destino) {
		Destino = destino;
	}

	public String getOrigem() {
		return Origem;
	}

	public void setOrigem(String origem) {
		Origem = origem;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_Viagem);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Viagem other = (Viagem) obj;
		return Objects.equals(Id_Viagem, other.Id_Viagem);
	}

	public List<Passagem> getPassagens() {
		return passagens;
	}
	
	
}
