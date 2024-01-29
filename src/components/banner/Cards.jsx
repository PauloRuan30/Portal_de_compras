import React, {useState} from 'react';

export default class Cards extends React.Component{
    render() {
        const cardsData = [
            {
              title: 'Planejamento de Contratações',
              content:
                'Revelamos o meticuloso planejamento estratégico por trás de nossas contratações, visando a excelência desde a concepção.',
              link: '#',
              svg: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              ),
            },
            {
                title: 'Planejamento de Contratações',
                content:
                  'Revelamos o meticuloso planejamento estratégico por trás de nossas contratações, visando a excelência desde a concepção.',
                link: '#',
                svg: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                ),
              },
              {
                title: 'Planejamento de Contratações',
                content:
                  'Revelamos o meticuloso planejamento estratégico por trás de nossas contratações, visando a excelência desde a concepção.',
                link: '#',
                svg: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                ),
              },
              {
                title: 'Planejamento de Contratações',
                content:
                  'Revelamos o meticuloso planejamento estratégico por trás de nossas contratações, visando a excelência desde a concepção.',
                link: '#',
                svg: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                ),
              },
              {
                title: 'Planejamento de Contratações',
                content:
                  'Revelamos o meticuloso planejamento estratégico por trás de nossas contratações, visando a excelência desde a concepção.',
                link: '#',
                svg: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                ),
              },
              {
                title: 'Planejamento de Contratações',
                content:
                  'Revelamos o meticuloso planejamento estratégico por trás de nossas contratações, visando a excelência desde a concepção.',
                link: '#',
                svg: (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                ),
              },
              
            // Adicione mais objetos conforme necessário
          ];
      
        return (
            <div class="flex flex-wrap justify-center my-8">
                {/* Card 1 */}
                {cardsData.map((card, index) => (
                <div key={index} class="p-4 max-w-sm">
                    <div class="flex rounded-lg h-full bg-green-500 p-8 flex-col">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
                                {card.svg}
                            </div>
                            <h2 class="text-white text-lg font-medium">{card.title}</h2>
                        </div>
                        <div class="flex flex-col justify-between flex-grow">
                            <p class="leading-relaxed text-base text-white">
                               {card.content}
                            </p>
                            <a href="#" class="mt-3 text-black hover:text-blue-600 inline-flex items-center">Saiba mais
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        );    
    }
};