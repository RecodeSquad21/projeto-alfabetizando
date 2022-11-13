import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Voluntariado from "../pages/Voluntariado";
import CadastroAluno from "../pages/CadastroAluno";

export default function Rotas () {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/voluntariado" element={<Voluntariado />} />
                <Route path="/cadastroAluno" element={<CadastroAluno />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}