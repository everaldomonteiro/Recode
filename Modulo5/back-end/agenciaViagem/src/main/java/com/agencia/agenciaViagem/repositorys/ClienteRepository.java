package com.agencia.agenciaViagem.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.agenciaViagem.entities.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
