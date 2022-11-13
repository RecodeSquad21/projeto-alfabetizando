package com.cadastro.services;

import java.util.List;


import com.cadastro.model.Aluno;


public interface AlunoService {
	
	//CRUD Methods (save/read all and by id/update/delete
	Aluno saveAluno(Aluno aluno);
	List<Aluno> getAllAlunos();
	Aluno getAlunoById(Integer idAluno);
	Aluno updateAluno(Aluno aluno, Integer idAluno);
	void deleteAluno(Integer idAluno);
}
