package com.agencia.agenciaViagem.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agencia.agenciaViagem.entities.Viagem;

@Repository
public interface ViagemRepository extends JpaRepository<Viagem, Long> {

}
