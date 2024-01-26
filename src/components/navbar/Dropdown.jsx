// Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className="group-hover:flex flex-col absolute left-0 p-10 mt-5 w-full bg-slate-800 bg-opacity-75 backdrop-filter backdrop-blur-lg z-20 duration-300">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        <Link to="/licitacoes" className="text-gray-800 hover:bg-gray-200">
          Item 1
        </Link>
        <Link to="/licitacoes" className="text-gray-800 hover:bg-gray-200">
          Item 2
        </Link>
        <Link to="/licitacoes" className="text-gray-800 hover:bg-gray-200">
          Item 3
        </Link>
        {/* Adicione mais links conforme necessário */}
      </div>
    </div>
  );
};

export default Dropdown;
