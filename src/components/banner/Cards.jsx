import React from 'react';

// Componente de Cartão Reutilizável
const Card = ({ iconBgColor, icon, title, description }) => (
  <div className="rounded-xl bg-transparent p-7 text-center">
    <div className={`mx-auto flex h-16 w-16 mb-2 items-center justify-center rounded-full shadow-lg ${iconBgColor}`}>
      {icon}
    </div>
    <h1 className="text-green-900 mb-3 text-2xl font-bold lg:px-14">{title}</h1>
    <p className="px-4 text-lg text-gray-500">{description}</p>
  </div>
);

// Dados para os Cartões
const cardData = [
  {
    iconBgColor: 'bg-green-600',
    icon: <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"> {/* Seu ícone aqui */}</svg>,
    title: 'Contratações',
    description: 'Acompanhe todas as informações sobre as nossas contratações.',
  },
  {
    iconBgColor: 'bg-green-200',
    icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"> {/* Seu ícone aqui */}</svg>,
    title: 'Licitações',
    description: 'Transparência em processos licitatórios: explore modalidades e documentos essenciais para garantir equidade e conformidade.',
  },
  {
    iconBgColor: 'bg-green-600',
    icon: <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"> {/* Seu ícone aqui */}</svg>,
    title: 'Manuais e Normas',
    description: 'Encontre as legislações de maneira rápida e eficiente, possibilitando assim, a navegação de forma intuitiva, conforme assuntos específicos.',
  },
  {
    iconBgColor: 'bg-green-200',
    icon: <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"> {/* Seu ícone aqui */}</svg>,
    title: 'Planejamento de contratações',
    description: 'Revelamos o meticuloso planejamento estratégico por trás de nossas contratações, visando a excelência desde a concepção.',
  },
  {
    iconBgColor: 'bg-green-600',
    icon: <svg viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white"> {/* Seu ícone aqui */}</svg>,
    title: 'Registro de Preços',
    description: 'Eficiência custo-efetiva: o Registro de Preços simplifica a aquisição, promovendo consistência e economia.',
  },
  {
    iconBgColor: 'bg-green-200',
    icon: <svg class="w-[40px] h-[40px] text-green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> 
    {/* Seu ícone aqui */}
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
