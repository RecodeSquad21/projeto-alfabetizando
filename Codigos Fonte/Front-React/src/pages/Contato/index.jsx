import React from "react";
import "./style.css";

export default function Contato() {
    return (
        <div>
            <div className="container-flux" id="headContato">
                <div className="container bg-transparent">
                    <h1><strong>INFORMAÇÕES E CONTATO</strong></h1>
                    <p><strong>ATENDIMENTO NOS DIAS ÚTEIS, DAS 9H ÀS 17H</strong></p>
                </div>
            </div>
            <main>
                <div id="contato">
                    <div className="container">
                        <div className="row">
                            <div className="col col-map">
                                {/*                               <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1737722248977!2d-44.00878718447018!3d-19.832598940410943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691ecb00d7fb5%3A0xb2fbde2ffea30321!2sConquista%20Pampulha!5e0!3m2!1spt-BR!2sbr!4v1657813468320!5m2!1spt-BR!2sbr"
                                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>*/}
                            </div>
                        </div>
                    </div>
                    <div id="dadosContato">
                        <ul>
                            <ul>SAC: 31 99999-9999</ul>
                            <ul>WhatsApp: (XX) X XXXX-XXXX</ul>
                            <ul>Rua Não Existente, 000<br /> Bairro X, Belo Horizonte/MG</ul>
                        </ul>
                    </div>
                    <div id="emailForm">
                        <h2>Contate-nos via email</h2>
                        <div className="form-control form-control-lg">
                            <label htmlFor="exampleFormControlInput1" className="form-label">EMAIL</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@exemplo.com" />
                        </div>
                        <div className="form-control form-control-lg">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">MENSAGEM</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="form-control form-control-lg" type="submit">ENVIAR</button>
                    </div>
                </div>
            </main>
            <hr size="2"></hr>
        </div>
    )
}