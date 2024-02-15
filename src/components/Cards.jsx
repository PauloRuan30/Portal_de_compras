import React from 'react';
import { Link } from 'react-router-dom';

// Componente de Cartão Reutilizável
const Card = ({ linkRoute, iconBgColor, icon, title, description }) => (
  <Link to={`${linkRoute}`} className="rounded-xl bg-transparent p-7 text-center hover:shadow-lg transition hover:scale-105 hover:rotate">
    <div className={`mx-auto flex h-20 w-20 mb-3 items-center justify-center rounded-full shadow-lg ${iconBgColor}`}>
      {icon}
    </div>
    <h1 className="text-green-900 text-2xl font-bold lg:px-14">{title}</h1>
    <p className="px-4 text-lg text-gray-500">{description}</p>
  </Link>
);

// Dados para os Cartões
const cardData = [
  {
    linkRoute : '/contratacoes',
    iconBgColor: 'bg-[#15590a]',
    icon: 
      <svg class="w-[50px] h-[50px] text-green-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"/>
      </svg>,
    title: 'Contratações',
    description: 'Acompanhe todas as informações sobre as nossas contratações.',
  },
  {
    linkRoute : '/licitacoes',
    iconBgColor: 'bg-gradient-to-t from-gray-300 to-gray-200',
    icon:   
      <svg class="w-[50px] h-[50px] text-[#15590a]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4c0 .6-.4 1-1 1H5m14-4v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1Z"/>
      </svg>,
    title: 'Licitações',
    description: 'Transparência em processos licitatórios: explore modalidades e documentos essenciais para garantir equidade e conformidade.',
  },
  {
    linkRoute : '/normas',
    iconBgColor: 'bg-[#15590a]',
    icon: 
      <svg class="w-[50px] h-[50px] text-green-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4"/>
      </svg>,
    title: 'Manuais e Normas',
    description: 'Encontre as legislações de maneira rápida e eficiente, possibilitando assim, a navegação de forma intuitiva, conforme assuntos específicos.',
  },
  {
    linkRoute : '/planejamento-de-contratacoes',
    iconBgColor: 'bg-gradient-to-t from-gray-300 to-gray-200',
    icon: 
      <svg class="w-[50px] h-[50px] text-[#15590a]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3c.6 0 1 .4 1 1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-3 5h3m-6 0h0m3 4h3m-6 0h0m1-13v4h4V3h-4Z"/>
      </svg>,
    title: 'Planejamento de contratações',
    description: 'Revelamos o meticuloso planejamento estratégico por trás de nossas contratações, visando a excelência desde a concepção.',
  },
  {
    linkRoute : '/sistema-de-registro-de-preco',
    iconBgColor: 'bg-[#15590a]',
    icon: 
      <svg class="w-[50px] h-[50px] text-green-50 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.6 8.4h0m-4.7 11.3-6.6-6.6a1 1 0 0 1 0-1.4l7.3-7.4a1 1 0 0 1 .7-.3H18a2 2 0 0 1 2 2v5.5a1 1 0 0 1-.3.7l-7.5 7.5a1 1 0 0 1-1.3 0Z"/>
      </svg>,
    title: 'Registro de Preços',
    description: 'Eficiência custo-efetiva: o Registro de Preços simplifica a aquisição, promovendo consistência e economia.',
  },
  {
    linkRoute : '/sistemas',
    iconBgColor: 'bg-gradient-to-t from-gray-300 to-gray-200',
    icon:  
      <svg class="w-[50x] h-[50px] text-[#15590a]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> 
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      </svg>,
    title: 'Sistemas',
    description: 'Encontre informações referentes aos sistemas necessários para seus processos demandantes.',
  },
];

// Componente de Cartões
const Cards = () => (
  <div className="py-16 px-16">
    <div className="grid gap-14 md:grid-cols-3 md:gap-3">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  </div>
);

export default Cards;
