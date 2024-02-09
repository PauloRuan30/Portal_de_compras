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
import DyBanner from "./components/pages_banners/Dynamic_Banner";

/* Páginas */
import Inicio from "./pages/inicio/Inicio";
import Fornecedores from "./pages/fornecedores/Fornecedores";
import Licitacoes from "./pages/licitacoes/Licitacoes";
import Normas from "./pages/normas/Normas"; 
import Planejamento from "./pages/planejamento_e_contratacoes/Planejamento_de_contracoes";
import Sistemas from "./pages/sistema/Sistemas";
import Servidores from "./pages/servidores/Servidores";
import Comunicados from "./pages/comunicados/Comunicados";
import Gestores from "./pages/gestores/Gestores";
import Orientacoes from "./pages/orientacoes/Orientacoes";
import Contratacoes from "./pages/contratacoes/Contratacoes";
// import DR-Fornecedores from "./pages/fornecedores/DFornecedores";
import DNormas from "./pages/normas/DNormas";
import DSistemas from "./pages/sistema/DSistemas";
import DPlanejamentoContratacoes from "./pages/planejamento_e_contratacoes/DPlanejamento_e_contratacoes";
import DFornecedores from "./pages/fornecedores/DFornecedores";
import DGestores from "./pages/gestores/DGestores";
import DContratacoes from "./pages/contratacoes/DContratacoes";
import DLicitacoes from "./pages/licitacoes/DLicitacoes";
import RegistroPreco from "./pages/registro_de_preco/Registro_de_preco";
import DRegistroPreco from "./pages/registro_de_preco/DRegistro_de_preco";
import DServidores from "./pages/servidores/DServidores";
/* Hooks, stringtoHtml, etc */

function App() {
    return (
        <Router>
            {/* Rotas estáticas da Navbar */}
            <Navbar/>
            <DyBanner/>
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
                    <Route exact path="/sistemas" element={<Sistemas/>}/>
                    <Route exact path="/gestores" element={<Gestores/>}/>
                    <Route exact path="/servidores" element={<Servidores/>}/>
                    <Route exact path="/comunicados" element={<Comunicados/>}/>
                    <Route exact path="/contratacoes" element={<Contratacoes/>}/>
                    <Route exact path="/registro-de-preco" element={<RegistroPreco/>}/>
                    
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
                    <Route path="/contratacoes/:rota" element={<DContratacoes/>}>
                        <Route path=":rota" element={<DContratacoes/>}></Route>
                    </Route>
                    <Route path="/registro-de-preco/:rota" element={<DRegistroPreco/>}>
                        <Route path=":rota" element={<DRegistroPreco/>}></Route>
                    </Route>
                    <Route path="/sistemas/:rota" element={<DSistemas/>}>
                        <Route path=":rota" element={<DSistemas/>}></Route>
                    </Route>
                    <Route path="/servidores/:rota" element={<DServidores/>}>
                        <Route path=":rota" element={<DServidores/>}></Route>
                    </Route>
                </Routes>
                
            {/* */}
            <Footer/>
        </Router>
    );
}

export default App;
