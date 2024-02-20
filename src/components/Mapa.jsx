import {React, useState, useEffect, Suspense, } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Esqueleto_de_Loading from './Esqueleto_de_Loading';

const Mapa = () =>
{
    const exceptions = ["/portal-de-compras/fornecedores","/portal-de-compras/gestores-e-fiscais","/portal-de-compras/unidades-requisitantes",
  "/portal-de-compras/comunicados","/portal-de-compras/treinamento-para-editores"];

    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://apps.tre-ce.jus.br/api-portal-de-compras');
          setItems(response.data);
        } catch (error) {
          console.error("Erro ao carregar os dados:", error);
        }
      };
    
      fetchData();
    }, []);

    return (
        <Suspense fallback={<Esqueleto_de_Loading></Esqueleto_de_Loading>}>
        <div class="container mx-auto px-4">
        <h4 class="text-3xl font-bold text-gray-50">Mapa do site</h4>
            <div class="flex flex-wrap text-left lg:text-left">
              <div class="w-full lg:w-6/12 px-4">
               
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
                    <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl font-semibold">
                    {items.map((item, index) => {
                        const itemName = Object.keys(item)[0];
                        const itemUrl = item[itemName];
                        return (
                            <li key={index}>
                            <div
                            className="relative inline-block"
                            >
                            <NavLink
                                className="hover:underline"
                                to={itemUrl.replace("/portal-de-compras/","/")}
                            >
                                {itemName}
                            </NavLink>
                            </div>
                        </li>
                        )
                    })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-300"/>
          </div>
        </Suspense>
    )
}

export default Mapa