import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./style.css"

export default function ViewVoluntario() {
  const { idVoluntario } = useParams();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [apresentacao, setApresentacao] = useState('');
  const [tipo, setTipo] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    carregaVoluntario();
  }, []);

  const carregaVoluntario = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/alfabetizando/voluntario/${idVoluntario}`
    );
    console.log(result.data);
    setNome(result.data.nome)
    setSobrenome(result.data.sobrenome)
    setCidade(result.data.cidade)
    setEstado(result.data.estado)
    setCep(result.data.cep)
    setEmail(result.data.email)
    setApresentacao(result.data.apresentacao)
    setTipo(result.data.tipo)
  };

  return (
    <div id="cardViewVoluntario">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4"><strong>Dados de Voluntário/a</strong></h2>
            <div className="card">
              <div className="card text-center">
                <div className="card-header">ID: {idVoluntario}</div>
                <div className="card-body">
                  <p className="card-title">
                    <b>Nome: </b> {nome}
                  </p>
                  <p className="card-title">
                    <b>Sobrenome: </b> {sobrenome}
                  </p>
                  <p className="card-title">
                    <b>E-mail: </b> {email}
                  </p>
                  <p className="card-title">
                    <b>Cidade: </b> {cidade}
                  </p>
                  <p className="card-title">
                    <b>Estado: </b> {estado}
                  </p>
                  <p className="card-title">
                    <b>CEP: </b> {cep}
                  </p>
                  <p className="card-title">
                    <b>Apresentação: </b> {apresentacao}
                  </p>
                  <p className="card-title">
                    <b>Função voluntária: </b> {tipo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
