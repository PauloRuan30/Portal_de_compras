import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

/* Componentes */
import Infos from './components/Infos';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner';
import Avisos from './components/Avisos'

/* Páginas */
import Inicio from "./pages/inicio/Inicio";
import Fornecedores from "./pages/fornecedores/Fornecedores";
import Licitacoes from "./pages/licitacoes/Licitacoes";
import Normas from "./pages/normas/Normas"; 
import Planejamento from "./pages/planejamento_e_contratacoes/Planejamento_de_contracoes";
import DLicitacoes from "./pages/licitacoes/DLicitacoes";
// import DR-Fornecedores from "./pages/fornecedores/DFornecedores";
import DNormas from "./pages/normas/DNormas";
import DPlanejamentoContratacoes from "./pages/planejamento_e_contratacoes/DPlanejamento_e_contratacoes";
import Orientacoes from "./pages/orientacoes/Orientacoes";
import DFornecedores from "./pages/fornecedores/DFornecedores";
import Gestores from "./pages/gestores/Gestores";
import DGestores from "./pages/gestores/DGestores";
import Sistemas from "./pages/sistema/Sistemas";
import Servidores from "./pages/servidores/Servidores";
import Comunicados from "./pages/comunicados/Comunicados";


/* Hooks, stringtoHtml, etc */

function App() {
    return (
        <Router>
            {/* Rotas estáticas da Navbar */}
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<>
                        <Banner/>
                        <Avisos/>
                        <Infos/>
                        <Inicio  />
                    </>} />
                    <Route exact path="/licitacoes"  element={<Licitacoes />} />
                    <Route exact path="/normas" element={<Normas/>}/>
                    <Route exact path="/planejamento" element={<Planejamento/>}/>
                    <Route exact path="/orientacoes" element={<Orientacoes/>}/>
                    <Route exact path="/fornecedores" element={<Fornecedores/>}/>
                    <Route exact path="/Sistemas" element={<Sistemas/>}/>
                    <Route exact path="/gestores" element={<Gestores/>}/>
                    <Route exact path="/servidores" element={<Servidores/>}/>
                    <Route exact path="/comunicados" element={<Comunicados/>}/>
                    
                    
                    <Route path="/planejamento/:rota" element={<DPlanejamentoContratacoes/>}>
                        <Route path=":rota" element={<DPlanejamentoContratacoes/>}></Route>
                    </Route>

                    <Route path="/licitacoes/:rota" element={<DLicitacoes/>}>
                        <Route path=":rota" element={<DLicitacoes/>}></Route>
                    </Route>
                    <Route path="/fornecedores/:rota" element={<DFornecedores/>}>
                        <Route path=":rota" element={<DFornecedores/>}></Route>
                    </Route>
                    <Route path="/normas/:rota" element={<DNormas/>}>
                        <Route path=":rota" element={<DNormas/>}></Route>
                    </Route>
                    <Route path="/planejamento/:rota" element={<DPlanejamentoContratacoes/>}>
                        <Route path=":rota" element={<DPlanejamentoContratacoes/>}></Route>
                    </Route>
                    <Route path="/gestores/:rota" element={<DGestores/>}>
                        <Route path=":rota" element={<DGestores/>}></Route>
                    </Route>
                </Routes>
                
            {/* */}
            <Footer/>
        </Router>
    );
}

export default App;
