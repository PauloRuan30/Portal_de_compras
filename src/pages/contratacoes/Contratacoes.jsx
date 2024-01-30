import React from "react";
import { StringHTML } from "../../components/StringHTML";
import Sidebar from "../../components/Sidebar";

const Contratacoes = () => {

    const Cplusplus = require('../../App.css');

    const dado = require('../../json/contratacoes.json')

    return (
        <div>

            <p class="font-bold text-3xl text-center items-center py-10">
                Aqui está a estrutura da página de Contratações
            </p>

            <div className="flex flex-auto text-xl">
                <Sidebar />
                <StringHTML htmlString={dado.text.data} />
            </div>
        </div>

    );
}
export default Contratacoes;
