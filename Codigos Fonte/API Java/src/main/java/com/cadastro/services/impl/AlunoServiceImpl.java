package com.cadastro.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.repositories.AlunoRepository;
import com.cadastro.exception.ResourceNotFoundException;
import com.cadastro.model.Aluno;
import com.cadastro.services.AlunoService;

@Service
public class AlunoServiceImpl implements AlunoService {

	//Injeção de dependencia //instancia do repositorio
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Override
	public Aluno saveAluno(Aluno aluno) {
		return alunoRepository.save(aluno);
	}

	@Override
	public List<Aluno> getAllAlunos() {
		return alunoRepository.findAll();
	}

	@Override
	public Aluno getAlunoById(Integer idAluno) {
		return alunoRepository.findById(idAluno).orElseThrow( () ->
				new ResourceNotFoundException("Aluno", "ID", idAluno));
	}

	@Override
	public Aluno updateAluno(Aluno aluno, Integer idAluno) {
		Aluno existingAluno = alunoRepository.findById(idAluno).orElseThrow(() -> 
		new ResourceNotFoundException("Aluno", "ID", idAluno));
		
		existingAluno.setNome(aluno.getNome());
		existingAluno.setEndereco(aluno.getEndereco());
		existingAluno.setEstado(aluno.getEstado());
		existingAluno.setCidade(aluno.getCidade());
		existingAluno.setCep(aluno.getCep());
		existingAluno.setEmail(aluno.getEmail());
		existingAluno.setSenha(aluno.getSenha());
		
		alunoRepository.save(existingAluno);
		return existingAluno;
	}

	@Override
	public void deleteAluno(Integer idAluno) {
		alunoRepository.findById(idAluno).orElseThrow(() -> 
		new ResourceNotFoundException("Aluno", "ID", idAluno));
		
		alunoRepository.deleteById(idAluno);
	}

}
