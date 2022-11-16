import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import axios from 'axios';

export default function Voluntariado() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [apresentacao, setApresentacao] = useState('');
    const [tipo, setTipo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (e) => {
        e.preventDefault();
        console.log(nome, sobrenome, cidade, estado, cep, apresentacao, tipo, email, senha);
        await axios.post("http://localhost:8080/api/alfabetizando/voluntario/", {
            nome: nome,
            sobrenome: sobrenome,
            cidade: cidade,
            estado: estado,
            cep: cep,
            email: email,
            senha: senha,
            apresentacao: apresentacao,
            tipo: tipo
        }).then((result) => {
            alert("Voluntario cadastrado");
            navigate("/voluntariado")
        }).catch((erro) => {
            console.log(erro);
        })
    }

    return (
        <div>
            <div className="container-flux" id="headCadastroVoluntario">
                <div className="container bg-transparent">
                    <header>
                        <h1><strong>Deseja ser voluntário?</strong></h1>
                        <h3>Cadastre-se e venha fazer parte de quem ajuda.</h3>
                    </header>
                </div>
            </div>
            <main className="container">
                <form className="row g-3 needs-validation" id="formVoluntariado" noValidate>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom01" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="validationCustom01" required value={nome}
                            onChange={(e) => setNome(e.target.value)} />
                        <div className="valid-feedback">
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom02" className="form-label">Sobrenome</label>
                        <input type="text" className="form-control" id="validationCustom02" required
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)} />
                        <div className="valid-feedback">
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom03" className="form-label">Cidade</label>
                        <input type="text" className="form-control" id="validationCustom03" required
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)} />
                        <div className="invalid-feedback">
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom04" className="form-label">Estado</label>
                        <input type="text" className="form-control" id="validationCustom04" required
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)} />
                        <div className="invalid-feedback">
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom05" className="form-label">Cep</label>
                        <input type="number" className="form-control" id="validationCustom05" required
                            value={cep}
                            onChange={(e) => setCep(e.target.value)} />
                        <div className="invalid-feedback">
                            Por favor, insira o CEP
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom06" className="form-label">Faça uma breve apresentação</label>
                        <input type="text" className="form-control" id="validationCustom06" rows="3"
                            value={apresentacao}
                            onChange={(e) => setApresentacao(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom07" className="form-label">No projeto você pode atuar na Docência, Psicologia ou fornecendo Apoio. Qual dessas áreas do voluntariado deseja se candidatar? </label>
                        <input type="text" className="form-control" id="validationCustom07" rows="3"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Digite uma senha | máx. 20 caracteres"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" for="invalidCheck">
                                Aceito os termos e condições do voluntariado
                            </label>
                            <div className="invalid-feedback">
                                Aceite os termos antes de enviar o formulário.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary-success" type="submit" onClick={salvar}>Enviar informações</button>
                    </div>
                </form>
            </main>
            <hr size="2"></hr>
        </div>
    )
}
