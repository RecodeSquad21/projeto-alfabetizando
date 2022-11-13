package com.cadastro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.cadastro.model.enums.TipoVoluntario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "voluntario")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Voluntario {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idVoluntario;
	@Column
	private String nome;
	@Column
	private String sobrenome;
	@Column
	private String cidade;
	@Column
	private String estado;
	@Column
	private Integer cep;
	@Column
	private String apresentacao;
	@Column
	@Enumerated(value = EnumType.STRING)
	private TipoVoluntario tipo;
	@Column
	private String email;
	@Column
	private String senha;
}
