import React, {useState} from 'react';
import Cards from './Cards';

const Banner = ()=> {
    return(   
        <div id="div_geral">
            <div class="bg-cover bg-center h-auto text-white py-24 px-20 object-fill bg-green-700">
                   <div class="md:w-1/2">                    
                    
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6x">Seja Bem-vindo ao <span class="text-amber-500">Portal de Compras</span></h1>
                    <p class="text-lg font-normal text-gray-200 lg:text-xl">
                    Explore transparência e eficiência em cada clique. 
                    Navegue por processos licitatórios, documentos essenciais e oportunidades para fornecedores. 
                    Descubra como simplificamos contratações, promovendo uma gestão pública ágil e responsável. 
                    </p>

                </div> 
            </div>
            <Cards/>
        </div>    
 );    
};

export default Banner