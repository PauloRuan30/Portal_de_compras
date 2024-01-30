import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="group-hover:flex flex-col absolute left-0 p-10 mt-5 w-full bg-stone-800 bg-opacity-90 backdrop-filter backdrop-blur-lg z-20 duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid grid-cols-3 md:grid-cols-2 text-center px-20">
        <Link to="/licitacoes" className="text-2xl text-gray-300 hover:bg-green-500">
          Credenciamento
        </Link>
        <Link to="/licitacoes" className="text-2xl text-gray-300 hover:bg-green-500">
          Dispensa de licitação
        </Link>
        <Link to="/licitacoes" className="text-2xl text-gray-300 hover:bg-green-500">
          inexigibilidade
        </Link>
        <Link to="/licitacoes" className="text-2xl text-gray-300 hover:bg-green-500">
          Pregão Eletrônico
        </Link>
        <Link to="/licitacoes" className="text-2xl text-gray-300 hover:bg-green-500">
          Pregão Eletrônico
        </Link>
        <Link to="/licitacoes" className="text-2xl text-gray-300 hover:bg-green-500">
          Pregões Concluídos
        </Link>
        {/* Adicione mais links conforme necessário */}
      </div>
    </div>
  );
};

export default Dropdown;

