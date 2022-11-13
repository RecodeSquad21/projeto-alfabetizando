import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

export default function CadastroAluno() {
  const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (e) => {
      e.preventDefault();
      console.log(nome, endereco, estado, cidade, cep, email, senha);
      await axios.post("http://localhost:8080/api/alfabetizando/aluno/", {
          nome: nome,
          endereco: endereco,
          estado: estado,
          cidade: cidade,
          cep: cep,
          email: email,
          senha: senha,
      }).then((result) => {
          alert("Aluno cadastrado");
          navigate("/")
      }).catch((erro) => {
          console.log(erro);
      })
  }
  
  return (
    <div>
      <main className="container">
        <header id="titleAluno">
          <h1><strong>Quer ser aluno do projeto?</strong></h1>
          <h3>Cadastre-se!</h3>
        </header>
        <form className="text-center" id="formAluno">
          <div className="row g-3">
            <div className="form-group">
              <label htmlFor="inputName4">Nome</label>
              <input type="text" className="form-control" id="inputName4" placeholder="Digite seu nome completo" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="inputEndereco4">Endereço</label>
              <input type="text" className="form-control" id="inputEndereco4" placeholder="Logradouro, Número e Bairro" 
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}/>
            </div>
            <label htmlFor="inputCidade">Cidade</label>
            <input type="text" className="form-control" id="inputCidade" placeholder="Digite sua Cidade" 
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputEstado">Estado</label>
            <input type="text" className="form-control" id="inputEstado" placeholder="Digite seu Estado" 
            value={estado}
            onChange={(e) => setEstado(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputCep">CEP</label>
            <input type="number" className="form-control" id="inputCep" 
            value={cep}
            onChange={(e) => setCep(e.target.value)}/>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="inputEmail">Email</label>
              <input type="text" className="form-control" id="inputEmail" placeholder="Digite seu seu E-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="col">
              <label htmlFor="inputSenha">Senha</label>
              <input type="password" className="form-control" id="inputSenha" placeholder="Digite sua Senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}/>
            </div>
          </div>
          <button className="btn btn-primary-success" type="submit" onClick={salvar}>Enviar informações</button>
        </form>
      </main>
    </div>
  )
}