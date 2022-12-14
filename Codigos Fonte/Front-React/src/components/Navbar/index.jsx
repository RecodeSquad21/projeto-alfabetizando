import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";


export default function Navbar() {
    return (
        <div className="shadow fixed-top bg-white">
            <nav className="navbar navbar-expand-lg bg-white container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/voluntariado">Voluntariado</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projetos">Projetos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </div>
                <Link className="btn btn-outline-dark" to="/cadastroAluno">Aluno</Link>
                </div>
            </nav>
        </div>
    )
}