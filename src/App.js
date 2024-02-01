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
import Dropdwon from './components/navbar/Dropdown';
/* Páginas */
import Inicio from "./pages/inicio/Inicio";
import Fornecedores from "./pages/dfornecedores/Fornecedores";
import Licitacoes from "./pages/dlicitacoes/Licitacoes";
import Normas from "./pages/dnormas/Normas"; 
import Planejamento from "./pages/dplanejamento_e_contratacoes/Planejamento_de_contracoes";
import DLicitacoes from "./pages/dlicitacoes/DLicitacoes";
import DFornecedores from "./pages/dfornecedores/DFornecedores";
import DNormas from "./pages/dnormas/DNormas";
import DPlanejamentoContratacoes from "./pages/dplanejamento_e_contratacoes/DPlanejamento_e_contratacoes";
import Orientacoes from "./pages/dorientacoes/Orientacoes";

/* Hooks, stringtoHtml, etc */

function App() {
    return (
        <Router>
            {/* Rotas estáticas da Navbar */}
            <Navbar/>
            {/*<Dropdwon/>*/}
                <Routes>
                    <Route exact path="/" element={<>
                        <Banner/>
                        <Avisos/>
                        <Infos/>
                        <Inicio  />
                    </>} />
                    <Route exact path="/licitacoes"  element={<Licitacoes />} />
                    <Route exact path="/fornecedores" element={<Fornecedores />} />
                    <Route exact path="/normas" element={<Normas/>}/>
                    <Route exact path="/planejamento" element={<Planejamento/>}/>
                    <Route exact path="/orientacoes" element={<Orientacoes/>}/>

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
                </Routes>
                
            {/* */}
            <Footer/>
        </Router>
    );
}

export default App;
