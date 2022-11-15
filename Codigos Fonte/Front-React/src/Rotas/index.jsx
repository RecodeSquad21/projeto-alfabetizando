import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Voluntariado from "../pages/Voluntariado";
import CadastroAluno from "../pages/CadastroAluno";
import InfoVolunt from "../pages/InfoVoluntariado";
import EditVoluntario from "../pages/EditVoluntario";
import ViewVoluntario from "../pages/ViewVoluntario";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/voluntariado/cadastroVoluntariado" element={<Voluntariado />} />
                <Route path="/cadastroAluno" element={<CadastroAluno />} />
                <Route path="/voluntariado" element={<InfoVolunt />} />
                <Route path="/update/:idVoluntario" element={<EditVoluntario />} />
                <Route path="/view/:idVoluntario" element={<ViewVoluntario />}/>
                <Route path="*" element={<h1>Página não encontrada.</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}