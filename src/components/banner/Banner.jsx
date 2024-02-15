import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const pathName = location.pathname;

  // Função para decidir o conteúdo do banner com base na rota atual
  const getBannerContent = () => {
    switch (pathName) {
        case "/planejamento-de-contratacoes":
        return {
          title: "Planejamento de contratações",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
        case "/contratacoes":
        return {
          title: "Contratações",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
        case "/licitacoes":
        return {
          title: "Bem-vindo à página de Licitações",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
        case "/normas":
        return {
          title: "Bem-vindo à página de Sistemas",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
        case "/sistema-de-registro-de-preco":
        return {
          title: "Bem-vindo à página de Sistemas",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
        case "/sistemas":
        return {
          title: "Bem-vindo à página de Sistemas",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
        case "/fornecedores":
        return {
          title: "Bem-vindo à página de Sistemas",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
        case "/gestores-e-fiscais":
        return {
          title: "Bem-vindo à página de Sistemas",
          description: "Aqui você encontrará informações sobre nossos sistemas.",
        };
        case "/unidades-requisitantes":
        return {
          title: "Bem-vindo à página de Serviços",
          description: "Aqui você encontrará informações sobre nossos serviços.",
        };
        case "/treinamento-para-editores":
        return {
          title: "Bem-vindo à página de Serviços",
          description: "Aqui você encontrará informações sobre nossos serviços.",
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
