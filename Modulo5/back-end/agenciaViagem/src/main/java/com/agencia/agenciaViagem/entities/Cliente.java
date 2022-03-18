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
public class Cliente implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_Cliente;
	private String Nome;
	private String Cpf;
	private String Telefone;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente")
	private List<Passagem> passagens = new ArrayList<Passagem>();
	
	public Cliente() {
		super();
	}

	public Cliente(Long id_Cliente, String nome, String cpf, String telefone) {
		super();
		this.Id_Cliente = id_Cliente;
		this.Nome = nome;
		this.Cpf = cpf;
		this.Telefone = telefone;
	}

	public Long getId_Cliente() {
		return Id_Cliente;
	}

	public void setId_Cliente(Long id_Cliente) {
		Id_Cliente = id_Cliente;
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public String getCpf() {
		return Cpf;
	}

	public void setCpf(String cpf) {
		Cpf = cpf;
	}

	public String getTelefone() {
		return Telefone;
	}

	public void setTelefone(String telefone) {
		Telefone = telefone;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_Cliente);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cliente other = (Cliente) obj;
		return Objects.equals(Id_Cliente, other.Id_Cliente);
	}

	public List<Passagem> getPassagens() {
		return passagens;
	}

	
}
