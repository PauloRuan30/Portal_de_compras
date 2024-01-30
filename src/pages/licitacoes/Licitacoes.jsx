import React from "react";
import { StringHTML } from "../../components/StringHTML";
import Sidebar from "../../components/Sidebar";

const Licitacoes = () => {

    const Cplusplus = require('../../App.css');

    const dado = require('../../json/licitacoes.json')

    return (
        <div>
            <p class="font-bold text-3xl text-center items-center py-10">
                Aqui está a estrutura da página de Licitações
            </p>
            <div className="flex flex-auto text-xl items-center ">
                <Sidebar /> 
                <div class="">
                <StringHTML htmlString={dado.text.data} />
                </div>
            </div>
        </div>

    );
}
export default Licitacoes;
