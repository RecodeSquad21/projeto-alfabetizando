import React from "react";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div id="text-2" className="widget widget_text">
                                <h5 className="widgettitle title m_title m_title_ext text-custom"><strong>Alfabetizando</strong></h5>
                                <div className="textwidget">
                                    <p>Rua Não Existente, 000.&nbsp;Bairro X.&nbsp;<br />XXXXX-XXX – Belo Horizonte – MG – Brasil<br />Telefone: (31)
                                        9999-9999.</p>
                                    <hr size="1" />
                                </div>
                                &copy; Squad 21 Recode | Todos os direitos reservados
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}