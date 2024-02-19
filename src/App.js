import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Componentes */
import Banner from './components/banner/Banner';
import Cards from './components/Cards';
import Footer from './components/footer/Footer';
import Home_Banner from './components/banner/Home_Banner';
import Infos from './components/Infos';
import Navbar from './components/navbar/Navbar';
import Avisos from './components/Avisos';

/* Páginas */
import Comunicados from "./pages/comunicados/Comunicados";
import Contratacoes from "./pages/contratacoes/Contratacoes";
import DContratacoes from "./pages/contratacoes/DContratacoes"
import DFornecedores from "./pages/fornecedores/DFornecedores";
import DGestores_e_fiscais from "./pages/gestores-e-fiscais/DGestores-e-fiscais";
import DLicitacoes from "./pages/licitacoes/DLicitacoes";
import DNormas from "./pages/normas/DNormas";
import DPlanejamento_de_contratacoes from "./pages/planejamento-de-contratacoes/DPlanejamento_de_contratacoes";
import DSistema_de_registro_de_preco from "./pages/sistema-de-registro-de-preco/DSistema-de-registro_de_preco";
import DUnidades_requisitantes from "./pages/unidades-requisitantes/DUnidades-requisitantes";
import DSistemas from "./pages/sistemas/DSistemas";
import Fornecedores from "./pages/fornecedores/Fornecedores";
import Gestores_e_fiscais from "./pages/gestores-e-fiscais/Gestores-e-fiscais";
import Inicio from "./pages/inicio/Inicio";
import Licitacoes from "./pages/licitacoes/Licitacoes";
import Normas from "./pages/normas/Normas";
import Treinamento_para_editores from "./pages/treinamento_para_editores/Treinamento-para-editores";
import Planejamento_de_contracoes from "./pages/planejamento-de-contratacoes/Planejamento_de_contracoes";
import Sistema_de_registro_de_preco from "./pages/sistema-de-registro-de-preco/Sistema-de-registro_de_preco";
import Unidades_requisitantes from "./pages/unidades-requisitantes/Unidades-requisitantes";
import Sistemas from "./pages/sistemas/Sistemas";

function App() {
    return (
        <Router basename="/portal-de-compras">
            <Navbar />
            <Banner />
            <Routes>
                <Route exact path="/" element={
                    <>
                        <Home_Banner />
                        <Cards />
                        <Avisos />
                        <Infos />
                        <Inicio />
                    </>
                } />
                <Route path="/licitacoes" element={<Licitacoes />} />
                <Route path="/licitacoes/:rota" element={<DLicitacoes />} >
                    <Route path=":rota" element={<DLicitacoes />} >
                        <Route path=":rota" element={<DLicitacoes />} />
                    </Route>
                </Route>

                <Route path="/normas" element={<Normas />} />
                <Route path="/normas/:rota" element={<DNormas />} />
                <Route path="/planejamento-de-contratacoes" element={<Planejamento_de_contracoes />} />
                <Route path="/planejamento-de-contratacoes/:rota" element={<DPlanejamento_de_contratacoes />} />
                <Route path="/unidades-requisitantes" element={<Unidades_requisitantes />} />
                <Route path="/fornecedores" element={<Fornecedores />} />
                <Route path="/fornecedores/:rota" element={<DFornecedores />} />
                <Route path="/sistemas" element={<Sistemas />} />
                <Route path="/sistemas/:rota" element={<DSistemas />} />
                <Route path="/gestores-e-fiscais" element={<Gestores_e_fiscais />} />
                <Route path="/gestores-e-fiscais/:rota" element={<DGestores_e_fiscais />} />
                <Route path="/unidades-requisitantes" element={<Unidades_requisitantes />} />
                <Route path="/unidades-requisitantes/:rota" element={<DUnidades_requisitantes />} />
                <Route path="/comunicados" element={<Comunicados />} />
                <Route path="/contratacoes" element={<Contratacoes />} />
                <Route path="/contratacoes/:rota" element={<DContratacoes />} />
                <Route path="/sistema-de-registro-de-preco" element={<Sistema_de_registro_de_preco />} />
                <Route path="/sistema-de-registro-de-preco/:rota" element={<DSistema_de_registro_de_preco />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
