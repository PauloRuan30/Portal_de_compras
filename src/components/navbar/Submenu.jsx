import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';

const Submenu = () => {
  const [hoverStates, setHoverStates] = useState(Array(7).fill(false)); // Array com 5 itens, inicialmente todos false

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div className="bg-stone-800 shadow sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-lg">
      <div className="max-w-screen-xl px-4 py-1 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-1 rtl:space-x-reverse text-xl">
          <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[0] ? 'lightgreen' : 'white' }}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
                to="/"> Início </NavLink>
            </li>

            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[1] ? 'lightgreen' : 'white' }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                to="/orientacoes"> Orientações </NavLink>
            </li>


            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[2] ? 'lightgreen' : 'white' }}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
                to="/licitacoes"> Licitações </NavLink>
                {hoverStates[2] && <Dropdown />} {/* Mostrar o Dropdown apenas quando hoverStates[2] for true */}

            </li>

            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[3] ? 'lightgreen' : 'white' }}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
                to="/contratacoes"> Contratações </NavLink>
            </li>

            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[4] ? 'lightgreen' : 'white' }}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
                to="/manuais_e_normas"> Manuais </NavLink>
            </li>

            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[5] ? 'lightgreen' : 'white' }}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={() => handleMouseLeave(5)}
                to="/planejamento"> Planejamento </NavLink>
            </li>
            {/* ... (repetir para os demais itens do menu) */}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
