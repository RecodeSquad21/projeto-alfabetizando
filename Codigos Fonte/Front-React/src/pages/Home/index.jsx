import React from "react";
import logo from "../../assets/img/logo.png";
import "./style.css";
import criancaEscrevendo from "../../assets/img/criancaEscrevendo.jpg"; 
import criancaaprendendo from "../../assets/img/criancaaprendendo.jpg";
import duasCriancasLendo from "../../assets/img/duasCriancasLendo.jpg"



export default function Home() {
    return (
        <div>
            <header id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={criancaEscrevendo} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={criancaaprendendo} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={duasCriancasLendo} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </header>
            <main>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h3><strong>Sobre Nós</strong></h3>
                            <p>
                                Somos uma iniciativa social que conecta jovens e adultos das áreas rurais brasileiras
                                em estágio de alfabetização com voluntários diversos. Conosco, eles podem ter uma imersão educativa focada
                                no
                                desenvolvimento
                                das capacidades de leitura e escrita, se conectam com outras pessoas e têm acolhimento emocional.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h4>Missão</h4>
                            <p>Estamos alinhados às metas que a ODS 4 dispõe a fim de assegurar educação de qualidade a todos
                                especialmente às 4.4 e
                                4.6. Queremos elevar substancialmente o número de jovens e adultos com competências e conhecimentos básicos
                                em leitura,
                                escrita e matemática. Nossa missão é fomentar uma educação que vise o pleno desenvolvimento da pessoa, seu
                                preparo para o exercício da cidadania e sua qualificação para o trabalho.
                            </p>
                        </div>
                        <div className="col">
                            <h4>Visão</h4>
                            <p>
                                Potencializar jovens e adultos de áreas rurais através da educação,preparando-os para o mundo a partir de
                                habilidades relevantes, e reafirmar uma educação de qualidade enquanto direito a todos cidadãos.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <hr size="2"></hr>
        </div>
    )
}