package com.cadastro.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.exception.ResourceNotFoundException;
import com.cadastro.model.Voluntario;
import com.cadastro.repositories.VoluntarioRepository;
import com.cadastro.services.VoluntarioService;

@Service
public class VoluntarioServiceImpl implements VoluntarioService {
	
	@Autowired
	private VoluntarioRepository voluntarioRepository;
	
	@Override
	public Voluntario saveVoluntario(Voluntario voluntario) {
		return voluntarioRepository.save(voluntario);
	}

	@Override
	public List<Voluntario> getAllVoluntarios() {
		return voluntarioRepository.findAll();
	}

	@Override
	public Voluntario getVoluntarioById(Integer idVoluntario) {
		return voluntarioRepository.findById(idVoluntario).orElseThrow( () ->
		new ResourceNotFoundException("Voluntario", "ID", idVoluntario));
	}

	@Override
	public Voluntario updateVoluntario(Voluntario voluntario, Integer idVoluntario) {
		Voluntario existingVoluntario = voluntarioRepository.findById(idVoluntario).orElseThrow(() ->
		new ResourceNotFoundException("Voluntario", "ID", idVoluntario));
		
		existingVoluntario.setNome(voluntario.getNome());
		existingVoluntario.setSobrenome(voluntario.getSobrenome());
		existingVoluntario.setCidade(voluntario.getCidade());
		existingVoluntario.setEstado(voluntario.getEstado());
		existingVoluntario.setCep(voluntario.getCep());
		existingVoluntario.setApresentacao(voluntario.getApresentacao());
		existingVoluntario.setTipo(voluntario.getTipo());
		existingVoluntario.setEmail(voluntario.getEmail());
		existingVoluntario.setSenha(voluntario.getSenha());
		
		voluntarioRepository.save(existingVoluntario);
		return existingVoluntario;
	}

	@Override
	public void deleteVoluntario(Integer idVoluntario) {
		voluntarioRepository.findById(idVoluntario).orElseThrow(() -> 
		new ResourceNotFoundException("Aluno", "ID", idVoluntario));
		
		voluntarioRepository.deleteById(idVoluntario);
	}

}
