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
            title: "Planejamento de Contratações",
            description: "Descubra tudo sobre nossos processos de contratação e como planejamos cada etapa.",
        };
    case "/contratacoes":
        return {
            title: "Contratações",
            description: "Explore as oportunidades de contratação conosco e saiba como participar.",
        };
    case "/licitacoes":
        return {
            title: "Página de Licitações",
            description: "Fique por dentro de nossas licitações e como participar desse processo transparente.",
        };
    case "/normas":
        return {
            title: "Normas e Regulamentos",
            description: "Conheça as normas que regem nossas atividades e como elas garantem transparência e eficiência.",
        };
    case "/sistema-de-registro-de-preco":
        return {
            title: "Sistema de Registro de Preço",
            description: "Descubra como nosso sistema de registro de preço pode beneficiar sua empresa.",
        };
    case "/sistemas":
        return {
            title: "Nossos Sistemas",
            description: "Explore nossos sistemas e descubra como podem facilitar seu trabalho.",
        };
    case "/fornecedores":
        return {
            title: "Bem-vindo à Página de Fornecedores",
            description: "Saiba como se tornar um fornecedor e as vantagens de trabalhar conosco.",
        };
    case "/gestores-e-fiscais":
        return {
            title: "Gestores e Fiscais",
            description: "Informações importantes para gestores e fiscais de contratos.",
        };
    case "/unidades-requisitantes":
        return {
            title: "Unidades Requisitantes",
            description: "Descubra como solicitar os serviços de que sua unidade precisa.",
        };
    case "/treinamento-para-editores":
        return {
            title: "Treinamento para Editores",
            description: "Aprenda como editar e publicar conteúdo em nossas plataformas.",
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
      <div className="py-5 pt-8 bg-gradient-to-r from-green-800 to-green-700">
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
