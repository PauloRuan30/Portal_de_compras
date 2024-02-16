import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Componentes */
import Banner from './components/banner/Banner';
import Cards from './components/Cards';
import Footer from './components/footer/Footer';
import HomeBanner from './components/banner/HomeBanner';
import Infos from './components/Infos';
import Navbar from './components/navbar/Navbar';
import Avisos from './components/Avisos';

/* Páginas */
import Comunicados from "./pages/comunicados/Comunicados";
import Contratacoes from "./pages/contratacoes/Contratacoes";
import DContratacoes from "./pages/contratacoes/DContratacoes"
import DFornecedores from "./pages/fornecedores/DFornecedores";
import DGestores from "./pages/gestores/DGestores";
import DLicitacoes from "./pages/licitacoes/DLicitacoes";
import DNormas from "./pages/normas/DNormas";
import DPlanejamentoContratacoes from "./pages/planejamento_e_contratacoes/DPlanejamento_e_contratacoes";
import DRegistroPreco from "./pages/registro_de_preco/DRegistro_de_preco";
import DServidores from "./pages/servidores/DServidores";
import DSistemas from "./pages/sistema/DSistemas";
import Fornecedores from "./pages/fornecedores/Fornecedores";
import Gestores from "./pages/gestores/Gestores";
import Inicio from "./pages/inicio/Inicio";
import Licitacoes from "./pages/licitacoes/Licitacoes";
import Normas from "./pages/normas/Normas";
import Orientacoes from "./pages/orientacoes/Orientacoes";
import Planejamento from "./pages/planejamento_e_contratacoes/Planejamento_de_contracoes";
import RegistroPreco from "./pages/registro_de_preco/Registro_de_preco";
import Servidores from "./pages/servidores/Servidores";
import Sistemas from "./pages/sistema/Sistemas";

function App() {
    return (
        <Router basename="/portal-de-compras">
            <Navbar />
            <Banner />
            <Routes>
                <Route exact path="/" element={
                    <>
                        <HomeBanner />
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
                <Route path="/planejamento-de-contratacoes" element={<Planejamento />} />
                <Route path="/planejamento-de-contratacoes/:rota" element={<DPlanejamentoContratacoes />} />
                <Route path="/orientacoes" element={<Orientacoes />} />
                <Route path="/fornecedores" element={<Fornecedores />} />
                <Route path="/fornecedores/:rota" element={<DFornecedores />} />
                <Route path="/sistemas" element={<Sistemas />} />
                <Route path="/sistemas/:rota" element={<DSistemas />} />
                <Route path="/gestores" element={<Gestores />} />
                <Route path="/gestores/:rota" element={<DGestores />} />
                <Route path="/servidores" element={<Servidores />} />
                <Route path="/servidores/:rota" element={<DServidores />} />
                <Route path="/comunicados" element={<Comunicados />} />
                <Route path="/contratacoes" element={<Contratacoes />} />
                <Route path="/contratacoes/:rota" element={<DContratacoes />} />
                <Route path="/sistema-de-registro-de-preco" element={<RegistroPreco />} />
                <Route path="/sistema-de-registro-de-preco/:rota" element={<DRegistroPreco />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
