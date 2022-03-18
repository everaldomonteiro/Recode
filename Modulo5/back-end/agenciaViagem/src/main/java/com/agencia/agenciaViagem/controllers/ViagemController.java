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

import com.agencia.agenciaViagem.entities.Viagem;
import com.agencia.agenciaViagem.repositorys.ViagemRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/Viagens")
public class ViagemController {

	@Autowired
	private ViagemRepository viagemRepository;
	
	@GetMapping
	public ResponseEntity<List<Viagem>> findAll() {
		
		List<Viagem> viagems = viagemRepository.findAll();
		
		return ResponseEntity.ok().body(viagems);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Viagem> findById(@PathVariable Long id) {
		
		Viagem viagem = viagemRepository.findById(id).get();
		
		return ResponseEntity.ok().body(viagem);
	}
	// CREATE
    @PostMapping
    public Viagem create(@RequestBody Viagem viagem) {
    	
        return viagemRepository.save(viagem);
    }
    
    // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Viagem> update(@PathVariable long id,@RequestBody Viagem viagemDetails) {
    	Viagem updateViagem = viagemRepository.findById(id).get();

    	updateViagem.setPartida(viagemDetails.getPartida());
    	updateViagem.setDestino(viagemDetails.getDestino());
    	updateViagem.setOrigem(viagemDetails.getOrigem());

        viagemRepository.save(updateViagem);

        return ResponseEntity.ok(updateViagem);
    }

    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

    	Viagem viagem = viagemRepository.findById(id).get();

    	viagemRepository.delete(viagem);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
