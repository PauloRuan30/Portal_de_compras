import React from 'react';

export default class Infos extends React.Component {
  render() {
    // Array de objetos representando as informações de cada card
    const cardsData = [
      {
        title: 'Seja um Fornecedor',
        content: 'Junte-se a nós na construção de parcerias sólidas! Seja um fornecedor e faça parte da nossa rede de excelência.',
        link: '#',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-10 w-10 text-white transition-all"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        ),
      },
      {
        title: 'Para Gestores',
        content: 'Guardiões da integridade: compreenda o papel vital dos gestores e fiscais na condução de contratações íntegras e eficazes.',
        link: '#',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-10 w-10 text-white transition-all"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        ),
      },
      {
        title: 'Orientações para os Servidores',
        content: 'Informações necessárias para os servidores solicitarem aquisições em geral.',
        link: '#',
        svg: (
          <svg class="w-[50px] h-[50px] text-green-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-width="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        ),
      }
      // Adicione mais objetos conforme necessário
    ];

    return (
      <div className="flex justify-center my-10">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden bg-white px- pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-green-600 transition-all duration-300 group-hover:bg-green-600">
                {card.svg}
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>{card.content}</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
              </div>
              <p>
                  <a href={card.link} className="text-green-500 text-xl font-semibold transition-all duration-300 group-hover:text-white">
                    {card.title} &rarr;
                  </a>
                </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
