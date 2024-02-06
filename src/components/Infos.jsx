import React from 'react';

// Componente de Cartão Reutilizável
const Card = ({ bgColor, iconBgColor, icon, title, description }) => (
  <div className={`"rounded-xl ${bgColor} p-7 text-center hover:shadow-lg"`}>
    <div className={`mx-auto flex h-20 w-20 mb-3 items-center justify-center  ${iconBgColor}`}>
      {icon}
    </div>
    <h1 className="text-white text-2xl font-bold lg:px-14">{title}</h1>
    <p className="px-4 text-lg text-gray-50">{description}</p>
  </div>
);

// Dados para os Cartões
const cardData = [
  {
    bgColor : 'bg-green-800',
    iconBgColor: 'bg-green-800',
    icon: 
    <svg class="w-[50px] h-[50px] text-green-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"/>
    </svg>,
    title: 'Seja um Fornecedor',
    description: 'Junte-se a nós na construção de parcerias sólidas! Seja um fornecedor e faça parte da nossa rede de excelência.',
  },
  {
    bgColor : 'bg-green-700',
    iconBgColor: 'bg-green-700',
    icon:   
    <svg class="w-[50px] h-[50px] text-green-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4c0 .6-.4 1-1 1H5m14-4v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1Z"/>
    </svg>,
   title: 'Para Gestores',
   description: 'Guardiões da integridade: compreenda o papel vital dos gestores e fiscais na condução de contratações íntegras e eficazes.',
  },
  {
    bgColor : 'bg-green-600',
    iconBgColor: 'bg-green-600',
    icon: 
      <svg class="w-[50px] h-[50px] text-green-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4"/>
      </svg>,
     title: 'Orientações para os Servidores',
     description: 'Informações necessárias para os servidores solicitarem aquisições em geral.',
  },
];

// Componente de Cartões
const Cards = () => (
  <div className="py-16">
    <div className="grid gap-14 md:grid-cols-3 md:gap-0">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  </div>
);

export default Cards;
