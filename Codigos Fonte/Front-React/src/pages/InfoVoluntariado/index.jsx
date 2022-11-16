import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import professora from "../../assets/img/professora.png";
import mentoria from "../../assets/img/mentoria.png";
import apoio from "../../assets/img/apoio.png";


export default function InfoVolunt() {

  const [voluntarios, setVoluntarios] = useState([]);

  const listarVoluntarios = async () => {
    try {
      await axios.get("http://localhost:8080/api/alfabetizando/voluntario/").then((response) => {
        setVoluntarios(response.data)
      })
    } catch (erro) {
      console.log(erro.message);
    }
  }

  useEffect(() => {
    listarVoluntarios();
  }, [])


  const { idVoluntario } = useParams();

  const deleteVoluntario = async (idVoluntario) => {
    try {
      await axios.delete(`http://localhost:8080/api/alfabetizando/voluntario/${idVoluntario}`)
        .then((response) => {
          alert('Voluntário excluido.')
          listarVoluntarios();
        })
    } catch (erro) {
      alert(erro.message)
    }
  }

  return (
    <div>
      <div className="container-flux" id="headInfoVoluntariado">
        <div className="container bg-transparent">
          <header>
            <h1><strong>VOLUNTARIADO</strong></h1>
            <h3>Três modalidades de voluntariado</h3>
          </header>
        </div>
      </div>
      <div className="container">
        <main className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4" id="cardsVoluntariado">
            <div className="col">
              <div className="card h-100">
                <img src={professora} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">docência</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={apoio} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">acolhimento emocional</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={mentoria} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">mentorias e apoio pedagógico</h5>
                </div>
              </div>
            </div>
          </div>
          <h3>Tem interesse em participar? <Link to="cadastroVoluntariado">Cadastre-se aqui!</Link></h3>
        </main>
        <div className="py-4">
          <hr />
          <h2>Nossos Voluntários</h2>
          <table className="table table-striped border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">Cidade</th>
                <th scope="col">Estado</th>
                <th scope="col">Email</th>
                <th scope="col"> - </th>
              </tr>
            </thead>
            <tbody>
              {voluntarios.map((voluntario, key) => (
                <tr>
                  <th scope="row" key={key}>{key + 1}</th>
                  <td>{voluntario.nome}</td>
                  <td>{voluntario.sobrenome}</td>
                  <td>{voluntario.cidade}</td>
                  <td>{voluntario.estado}</td>
                  <td>{voluntario.email}</td>
                  <td>
                    <Link to={`/view/${voluntario.idVoluntario}`} className="btn btn-out-line-success mx-2">Ver</Link>
                    <Link to={`/update/${voluntario.idVoluntario}`} className="btn btn-out-line-success mx-2">Editar</Link>
                    <button className="btn btn-out-line-success mx-2" onClick={() => deleteVoluntario(voluntario.idVoluntario)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}