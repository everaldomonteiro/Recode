package com.agencia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.agencia.agenciaViagem.entities.Cliente;
import com.agencia.agenciaViagem.entities.Viagem;
import com.agencia.agenciaViagem.repositorys.ClienteRepository;
import com.agencia.agenciaViagem.repositorys.PassagemRepository;
import com.agencia.agenciaViagem.repositorys.ViagemRepository;

@SpringBootApplication
public class AgenciaViagemApplication implements CommandLineRunner {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private ViagemRepository viagemRepository;
	
	@Autowired
	private PassagemRepository passagemRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AgenciaViagemApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
//		Cliente a1 = new Cliente(null, "George", "01245896327", "01231156");
//		Cliente a2 = new Cliente(null, "Tom", "5464896327", "455431156");
//		Viagem v1 = new Viagem(null, "19:00", "RS", "SP");
//		Viagem v2 = new Viagem(null, "14:00", "PE", "BA");
//		
//		clienteRepository.save(a1);
//		clienteRepository.save(a2);
//		viagemRepository.save(v1);
//		viagemRepository.save(v2);
		
	}

}
