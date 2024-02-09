import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const pathName = location.pathname;

  // Função para decidir o conteúdo do banner com base na rota atual
  const getBannerContent = () => {
    switch (pathName) {
      case "/sistemas":
        return {
          title: "Bem-vindo à página de Sistemas",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
      case "/servicos":
        return {
          title: "Bem-vindo à página de Serviços",
          description: "Aqui você encontrará informações sobre nossos serviços.",
        };
      case "/produtos":
        return {
          title: "Bem-vindo à página de Produtos",
          description: "Aqui você encontrará informações sobre nossos produtos.",
        };
    }
  };

  const bannerContent = getBannerContent();

  // Verifica se há conteúdo a ser exibido no banner
  if (!bannerContent) {
    return null; // Retorna nulo se não houver conteúdo a ser exibido
  }

  const { title, description } = bannerContent;

  return (
    <div id="div_geral">
      <div className="py-5 pt-20 bg-gradient-to-r from-green-800 to-green-700">
        <div className="px-20 flex flex-wrap flex-col md:flex-row items-center bg-gradient-to-r from-green-800 to-green-700">
          <div className="flex flex-col w-full md:w-auto justify-center items-start text-center md:text-left">
            <h1 className="my-2 text-5xl font-bold leading-tight text-white">{title}</h1>
            <p className="text-2xl mb-6 text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
