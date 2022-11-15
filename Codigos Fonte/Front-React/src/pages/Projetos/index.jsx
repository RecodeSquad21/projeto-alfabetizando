import React from "react";
import "./style.css";
import abc from "../../assets/img/abc.jpg";

export default function Projetos() {
    return (
        <div id="projetos">
            <main>
                <div className="container-flux" id="titleProjetos">
                    <div className="container bg-transparent">
                        <h1><strong>CONHEÇA ONDE E COM QUEM NOSSO PROJETO TEM ATUADO</strong></h1>
                    </div>
                </div>
                <section id="cards">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={abc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Projeto 1</h5>
                                        <p className="card-text">Alfabetização de crianças em áreas rurais. Conectamos voluntários interessados em
                                            erradicar a analfabetização em áreas rurais remotas do país a alunos carentes de educação.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={abc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Projeto 1</h5>
                                        <p className="card-text">Alfabetização de crianças em áreas rurais. Conectamos voluntários interessados em
                                            erradicar a analfabetização em áreas rurais remotas do país a alunos carentes de educação.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={abc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Projeto 1</h5>
                                        <p className="card-text">Alfabetização de crianças em áreas rurais. Conectamos voluntários interessados em
                                            erradicar a analfabetização em áreas rurais remotas do país a alunos carentes de educação.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={abc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Projeto 1</h5>
                                        <p className="card-text">Alfabetização de crianças em áreas rurais. Conectamos voluntários interessados em
                                            erradicar a analfabetização em áreas rurais remotas do país a alunos carentes de educação.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <hr size="2"></hr>
        </div>
    )
}