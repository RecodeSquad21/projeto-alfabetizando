package com.cadastro.services;

import java.util.List;

import com.cadastro.model.Voluntario;

public interface VoluntarioService {

	Voluntario saveVoluntario(Voluntario voluntario);
	List<Voluntario> getAllVoluntarios();
	Voluntario getVoluntarioById(Integer idVoluntario);
	Voluntario updateVoluntario(Voluntario voluntario, Integer idVoluntario);
	void deleteVoluntario(Integer idVoluntario);
}
