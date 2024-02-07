import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
    return (
      <footer class="flex-auto bg-green-800 pt-8 pb-6">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl font-bold text-gray-50">Tribunal Regional Eleitoral do Ceará</h4>
              <h5 class="text-lg mt-0 mb-2 text-gray-100">
                Encontre-nos em qualquer uma dessas plataformas
              </h5>
              <div class="mt-6 lg:mb-0 mb-6">
                <button class="bg-gray-300 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i class="fab fa-twitter"></i></button><button class="bg-gray-300 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i class="fab fa-facebook-square"></i></button><button class="bg-gray-300 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i class="fab fa-dribbble"></i></button><button class="bg-gray-300 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-3">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-3 ml-auto">
                  <span class="block uppercase text-blueGray-500 text-xl font-bold mb-2">Useful Links</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-gray-100 hover:text-gray-200 font-semibold block text-lg" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                    </li>
                    <li>
                      <a class="text-gray-100 hover:text-gray-200 font-semibold block text-lg" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-3">
                  <span class="block uppercase text-blueGray-500 text-xl font-bold mb-2">Other Resources</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-gray-100 hover:text-gray-200 font-semibold block text-lg" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                    </li>
                    <li>
                      <a class="text-gray-100 hover:text-gray-200 font-semibold block text-lg" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
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