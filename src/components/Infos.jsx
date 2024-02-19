import React from 'react';
import { Link } from 'react-router-dom';

// Componente de Cartão Reutilizável
const Card = ({ linkRoute, bgColor, iconBgColor, icon, title, description }) => (
  <Link to={`${linkRoute}`} className={`" ${bgColor} p-10 pt-24 text-center transition hover:scale-105 hover:-rotate-1"`}>
    <div className={`mx-auto flex h-20 w-20 mb-3 items-center justify-center  ${iconBgColor}`}>
      {icon}
    </div>
    <h1 className="text-white text-2xl font-bold lg:px-14">{title}</h1>
    <p className="px-4 text-lg text-gray-50">{description}</p>
  </Link>
);

// Dados para os Cartões
const cardData = [
  {
    linkRoute : '/fornecedores',
    bgColor : 'bg-green-800',
    iconBgColor: 'bg-green-800',
    icon: 
    <svg class="w-[75px] h-[75px] text-green-50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect fill="none"/> 
    <path d="M119.8,214.8a8.1,8.1,0,0,1-7.8,6.1,6.3,6.3,0,0,1-1.9-.3l-30.2-7.5a15.7,15.7,0,0,1-6.6-3.5L50.8,190a7.9,7.9,0,1,1,10.4-12l22.6,19.6,30.1,7.5A8.1,8.1,0,0,1,119.8,214.8Zm132.6-95.2a15.8,15.8,0,0,1-8.1,9.3L221,140.6l-14.9,17.5h-.2c0,.1-.1.1-.1.2h-.1l-36.8,36.8a16.5,16.5,0,0,1-11.4,4.7,15.8,15.8,0,0,1-3.8-.5L95.7,185a15.2,15.2,0,0,1-6-2.9l-54-42.2-24-12a16.3,16.3,0,0,1-8.1-9.4,16,16,0,0,1,1.1-12.3L29.3,59.1a16.1,16.1,0,0,1,21.3-7L73,63.3l48.7-14.2a16.6,16.6,0,0,1,11,.8l33,15h16.4l23.3-11.7a16,16,0,0,1,21.3,6.9l24.6,47.1A16.2,16.2,0,0,1,252.4,119.6Zm-64.7,34.2-31.6-23-8.1,6.1a40.2,40.2,0,0,1-48,0l-5.4-4.1a15.9,15.9,0,0,1-1.7-24.1L132,69.5l1.8-1.5-7.7-3.5L77.4,78.7,50.2,130.9l49.4,38.6L157.5,184Zm18.7-20.7L179.2,80.9H143.3L104.2,120l5.4,4.1a24.3,24.3,0,0,0,28.8,0l12.8-9.6a8,8,0,0,1,9.5-.1l38,27.6Z"/>
    </svg>,
    title: 'Seja um Fornecedor',
    description: 'Junte-se a nós na construção de parcerias sólidas! Seja um fornecedor e faça parte da nossa rede de excelência.',
  },
  {
    linkRoute : '/gestores-e-fiscais',
    bgColor : 'bg-green-700',
    iconBgColor: 'bg-green-700',
    icon:   
    <svg class="w-[75px] h-[75px] text-green-50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z"/>
    </svg>,
   title: 'Para Gestores',
   description: 'Guardiões da integridade: compreenda o papel vital dos gestores e fiscais na condução de contratações íntegras e eficazes.',
  },
  {
    linkRoute : '/unidades-requisitantes',
    bgColor : 'bg-green-600',
    iconBgColor: 'bg-green-600',
    icon: 
      <svg class="w-[75px] h-[75px] text-green-50" xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16"> 
      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/> 
      </svg>,
     title: 'Orientações para as Unidades requisitantes',
     description: 'Informações necessárias para os servidores solicitarem aquisições em geral.',
  },
];

// Componente de Cartões
const Infos = () => (
  <div className="p">
    <div className="grid md:grid-cols-3 md:gap-0">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  </div>
);

export default Infos;