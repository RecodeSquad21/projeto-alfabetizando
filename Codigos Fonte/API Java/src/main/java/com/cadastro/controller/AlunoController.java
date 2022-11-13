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

import com.cadastro.model.Aluno;
import com.cadastro.services.impl.AlunoServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("api/alfabetizando/aluno")
public class AlunoController {

	@Autowired
	private AlunoServiceImpl service;
	
	@GetMapping("/home")
	public String hello() {
		return "oi";
	}
	
	//REQUEST LISTAGEM
	//localhost:8080/api/alfabetizando/aluno
	@GetMapping
	public ResponseEntity<List<Aluno>> findAll(){
		List<Aluno> alunos = service.getAllAlunos();
		return ResponseEntity.ok().body(alunos);
	}
	
	//REQUEST POR ID
	//localhost:8080/api/alfabetizando/aluno/1
	@GetMapping("{idAluno}")
	public ResponseEntity<Aluno> getAlunoById(@PathVariable("idAluno") Integer AlunoId){
		return new ResponseEntity<Aluno>(service.getAlunoById(AlunoId), HttpStatus.OK);
	}
	
	//REQUEST SAVE
	//localhost:8080/api/alfabetizando/aluno
	@PostMapping
	public ResponseEntity<Aluno> saveAluno(@RequestBody Aluno aluno){
		return new ResponseEntity<Aluno>(service.saveAluno(aluno), HttpStatus.CREATED);
	}
	
	//REQUEST UPDATE
	//localhost:8080/api/alfabetizando/aluno/1
	@PutMapping("{idAluno}")
	public ResponseEntity<Aluno> updateAluno(@PathVariable("idAluno") Integer idAluno, @RequestBody Aluno aluno){
		return new ResponseEntity<Aluno>(service.updateAluno(aluno, idAluno), HttpStatus.OK);
	}
	
	//REQUEST DELETE
	@DeleteMapping("{idAluno}")
	public ResponseEntity<String> deleteAluno(@PathVariable("idAluno") Integer idAluno){
		service.deleteAluno(idAluno);
		return new ResponseEntity<String>("Aluno deletado com sucesso.", HttpStatus.OK);
	}
}
