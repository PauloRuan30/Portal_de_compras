import React from "react";
import { StringHTML } from "../../components/StringHTML";
import Sidebar from "../../components/Sidebar";
import "../Main.modules.css"

const Planejamento = () => {
    const dado = require('../../json/planejamento_de_contratacoes.json')

    return (
        <div>
            <p class="font-bold text-3xl text-center items-center py-10">
                Aqui está a estrutura da página de Planejamento Contratações
            </p>

            <div className="flex flex-auto text-xl">
                <Sidebar/>
                <StringHTML htmlString={dado.text.data} />
            </div>
        </div>

    );
}
export default Planejamento;
