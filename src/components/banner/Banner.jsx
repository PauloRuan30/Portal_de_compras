import React, { useState } from "react";
import Cards from "./Cards";
import Banner_Curve from "./Banner_Curve";

const Banner = () => {
  return (
    <div id="div_geral">
      <div class="py-5 pt-20 bg-gradient-to-r from-green-800 to-green-700">
        <div class="px-20 flex flex-wrap flex-col md:flex-row items-center bg-gradient-to-r from-green-800 to-green-700">
          <div class="flex flex-col w-full md:w-auto justify-center items-start text-center md:text-left">
            {/* <p class="uppercase tracking-loose w-full">What business are you?</p> */}
            <h1 class="my-2 text-5xl font-bold leading-tight text-white">
              Seja bem-vindo ao Portal de Compras
            </h1>
            <p class="text-2xl mb-6 text-white">
              Bem-vindo ao nosso portal de compras, uma plataforma dedicada à
              transparência e conformidade nas aquisições públicas.
              <br />
              Aqui, buscamos facilitar o acesso a informações sobre licitações,
              dispensas eletrônicas, obras, e serviços,
              <br />
              promovendo uma gestão pública transparente e eficiente.
            </p>
          </div>
        </div>
      </div>
      <Banner_Curve />
      <Cards />
    </div>
  );
};

export default Banner;
