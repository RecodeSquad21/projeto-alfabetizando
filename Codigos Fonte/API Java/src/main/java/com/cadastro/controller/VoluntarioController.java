package com.cadastro.controller;

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

import com.cadastro.model.Voluntario;
import com.cadastro.services.impl.VoluntarioServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("api/alfabetizando/voluntario")
public class VoluntarioController {
	
	@Autowired
	private VoluntarioServiceImpl service;
	
	//REQUEST LISTAGEM
	//localhost:8080/api/alfabetizando
	@GetMapping
	public ResponseEntity<List<Voluntario>> findAll(){
		List<Voluntario> voluntarios = service.getAllVoluntarios();
		return ResponseEntity.ok().body(voluntarios);
	}
	//REQUEST POR ID
	//localhost:8080/api/alfabetizando/1
	@GetMapping("{idVoluntario}")
	public ResponseEntity<Voluntario> getVoluntarioById(@PathVariable("idVoluntario") Integer VoluntarioId){
		return new ResponseEntity<Voluntario>(service.getVoluntarioById(VoluntarioId), HttpStatus.OK);
	}
	
	//REQUEST SAVE
	//localhost:8080/api/alfabetizando/voluntario
	@PostMapping
	public ResponseEntity<Voluntario> saveVoluntario(@RequestBody Voluntario voluntario){
		return new ResponseEntity<Voluntario>(service.saveVoluntario(voluntario), HttpStatus.CREATED);
	}
	
	//REQUEST UPDATE
	//localhost:8080/api/alfabetizando/voluntario/1
	@PutMapping("{idVoluntario}")
	public ResponseEntity<Voluntario> updateVoluntario(@PathVariable("idVoluntario") Integer idVoluntario, @RequestBody Voluntario voluntario){
		return new ResponseEntity<Voluntario>(service.updateVoluntario(voluntario, idVoluntario ), HttpStatus.OK);
	}
		
	//REQUEST DELETE
	@DeleteMapping("{idVoluntario}")
	public ResponseEntity<String> deleteVoluntario(@PathVariable("idVoluntario") Integer idVoluntario){
		service.deleteVoluntario(idVoluntario);
		return new ResponseEntity<String>("Voluntario colaborador deletado com sucesso.", HttpStatus.OK);
	}
}
