package com.agencia.agenciaViagem.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agencia.agenciaViagem.entities.Cliente;
import com.agencia.agenciaViagem.entities.Passagem;
import com.agencia.agenciaViagem.entities.Viagem;
import com.agencia.agenciaViagem.repositorys.ClienteRepository;
import com.agencia.agenciaViagem.repositorys.PassagemRepository;
import com.agencia.agenciaViagem.repositorys.ViagemRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/Passagens")
public class PassagemController {
	@Autowired
	private PassagemRepository passagemRepository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private ViagemRepository viagemRepository;
	
	@GetMapping
	public ResponseEntity<List<Passagem>> findAll() {
		
		List<Passagem> passagems = passagemRepository.findAll();
		
		return ResponseEntity.ok().body(passagems);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Passagem> findById(@PathVariable Long id) {
		
		Passagem passagem = passagemRepository.findById(id).get();
		
		return ResponseEntity.ok().body(passagem);
	}
	
	// CREATE
    @PostMapping
    public Passagem createEmployee(@RequestBody Passagem passagem) {
    	
        return passagemRepository.save(passagem);
    }
    
    // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Passagem> update(@PathVariable long id,@RequestBody Passagem passagemDetails ) {
    	Passagem updatePassagem = passagemRepository.findById(id).get();
    	Cliente cliente = clienteRepository.findById(passagemDetails.getCliente().getId_Cliente()).get();
    	Viagem viagem = viagemRepository.findById(passagemDetails.getViagem().getId_Viagem()).get();
    	updatePassagem.setCliente(cliente);
    	updatePassagem.setViagem(viagem);

    	passagemRepository.save(updatePassagem);

        return ResponseEntity.ok(updatePassagem);
    }

    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

    	Passagem cliente = passagemRepository.findById(id).get();

    	passagemRepository.delete(cliente);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
