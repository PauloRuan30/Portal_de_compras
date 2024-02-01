import React, {useState} from 'react';
import Cards from './Cards';
import Banner_Curve from './Banner_Curve';

const Banner = ()=> {
    return(   
        <div id="div_geral">
            <div class="pt-24 bg-gradient-to-r from-green-800 to-green-700">
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center bg-gradient-to-r from-green-800 to-green-700">
                    <div class="flex flex-col w-full md:w-2/6 justify-center items-start text-center md:text-left">
                    {/* <p class="uppercase tracking-loose w-full">What business are you?</p> */}
                    <h1 class="my-4 text-5xl font-bold leading-tight">
                        Seja bem-vindo ao Portal de Compras
                    </h1>
                    <p class=" text-xl mb-8">
                        Explore transparência e eficiência em cada clique. 
                        Navegue por processos licitatórios, documentos essenciais e oportunidades para fornecedores. 
                        Descubra como simplificamos contratações, promovendo uma gestão pública ágil e responsável. 
                    </p>
                    </div>
                    <div class="w-full md:w-3/5 py-6 text-center ">
                    <img class="w-full md:w-4/5 z-50" src="/banner-image.svg"/>
                    </div>
                </div>
                </div>
                <Banner_Curve/>
                <Cards/>
        </div>    
 );    
};

export default Banner