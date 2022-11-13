package com.cadastro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "aluno")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Aluno {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idAluno;
	@Column(nullable = false)
	private String nome;
	@Column
	private String endereco;
	@Column
	private String estado;
	@Column
	private String cidade;
	@Column
	private Integer cep;
	@Column(nullable = false)
	private String email;
	@Column(nullable = false)
	private String senha;
}
