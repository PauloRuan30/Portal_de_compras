import React from 'react'
import Mapa from '../Mapa';

const Footer = () => {
    return (
      <footer class="flex-auto mb-0 bg-green-800 pt-8 pb-6 mt-12">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl font-bold text-gray-50">Tribunal Regional Eleitoral do Ceará</h4>
         
              <div class="mt-6 lg:mb-0 mb-6">
              <button type="button" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Base</button>              </div>
            </div>
            <div class="w-full lg:w-6/12 px-3">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-3 ml-auto"> </div>
                <div class="w-full lg:w-3/5 px-3">
                  <span class="block uppercase text-blueGray-500 text-xl font-bold">Contatos</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-gray-100 hover:text-gray-200 font-semibold block text-lg" href="#">Rua Dr. Pontes Neto 800 - Eng. Luciano Cavalcante - Fortaleza/CE - CEP 60813-600</a>
                    </li>
                    <li>
                      <a class="text-gray-100 hover:text-gray-200 font-semibold block text-lg" href="#">Tel: (85) 3453-3500</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-300"/>

        </div>
        <Mapa></Mapa>
        <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-white font-semibold py-1">
                Direitos Autorais © <span id="get-current-year">2024</span><a class="text-white hover:text-gray-200" target="_blank"/> Portal de Compras por: 
                <a class="text-white hover:text-gray-200"> Tribunal Regional Eleitoral do Estado do Ceará</a>.
              </div>
            </div>
          </div>
      </footer>
    );
  };
  export default Footer;