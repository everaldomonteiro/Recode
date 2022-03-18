package com.agencia.agenciaViagem.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.agenciaViagem.entities.Passagem;

@Repository
public interface PassagemRepository extends JpaRepository<Passagem, Long>{

}
