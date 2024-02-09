import React from 'react'

const Footer = () => {
    return (
      <footer class="flex-auto bg-green-800 pt-8 pb-6">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl font-bold text-gray-50">Tribunal Regional Eleitoral do Ceará</h4>
              {/* <h5 class="text-lg mt-0 mb-2 text-gray-100">
                Encontre-nos em qualquer uma dessas plataformas
              </h5> */}
              <div class="mt-6 lg:mb-0 mb-6">
                {/* <button class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>
                 */}
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-3">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-3 ml-auto">
                  {/* <span class="block uppercase text-blueGray-500 text-xl font-bold mb-2"></span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-gray-100 hover:text-gray-200 font-semibold block text-lg" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                    </li>
                    <li>
                      <a class="text-gray-100 hover:text-gray-200 font-semibold block text-lg" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                    </li>
                  </ul> */}
                </div>
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
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-white font-semibold py-1">
                Direitos Autorais © <span id="get-current-year">2024</span><a class="text-white hover:text-gray-200" target="_blank"/> Portal de Compras por: 
                <a class="text-white hover:text-gray-200"> Tribunal Regional Eleitoral do Estado do Ceará</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;