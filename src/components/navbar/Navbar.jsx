import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [hoverStates, setHoverStates] = useState(Array(7).fill(false)); // Array com 5 itens, inicialmente todos false
  const [isHovering] = useState(false)

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
    <header className="flex flex-col top-0 sticky bg-[#15590a]">
      <nav id="header" className="mx-auto max-w-screen-xl p- w-full z-30 top-0 text-black ">
        <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
              style={{ color: isHovering ? 'lightgreen' : 'black' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img className="h-12 pr-2 fill-current inline" src="/Marca_TRE.svg">
                {/* SVG content */}
              </img>
              Portal de Compras
            </a>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-green-600 lg:bg-transparent lg:p-0 z-15">
            <ul className="list-reset lg:flex justify-end flex-1 items-center text-lg font-semibold">
            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[0] ? 'lightgreen' : 'black' }}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
                to="/"> Início </NavLink>
            </li>

            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[1] ? 'lightgreen' : 'black' }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                to="/planejamento"> Plan. de Contratações </NavLink>
            </li>

            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[2] ? 'lightgreen' : 'black' }}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
                to="/licitacoes"> Licitacoes </NavLink>
            </li>

            <li>
              <NavLink
                href="#" className="hover:underline"
                style={{ color: hoverStates[3] ? 'lightgreen' : 'black' }}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
                to="/normas"> Normas e Manuais </NavLink>
            </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ text }) => (
  <li className="mr-3">
    <a className="inline-block text-black font-bold no-underline" href="#">
      {text}
    </a>
  </li>
);

export default Navbar;
