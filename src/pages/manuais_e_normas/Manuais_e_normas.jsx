import React from "react";
import { StringHTML } from "../../components/StringHTML";
import Sidebar from "../../components/Sidebar";


const Licitacoes = () => {

    const Cplusplus = require('../../App.css');

    const dado = require('../../json/normas_2024-01-19.json')

    return (
        <div>
            <p class="font-bold text-3xl text-center items-center py-10">
                Aqui está a estrutura da página de normas
            </p>
            <div className="flex flex-auto">
                <Sidebar />
                <StringHTML htmlString={dado.text.data} />
            </div>
        </div>

    );
}
export default Licitacoes;
