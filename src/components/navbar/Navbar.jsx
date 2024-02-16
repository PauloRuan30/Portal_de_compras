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
    <header className="flex flex-col top-0 sticky backdrop-filter backdrop-blur-sm bg-opacity-90 bg-gray-300 shadow">
      <nav id="header" className="mx-auto p-1 px-5 w-full top-0 text-black">
        <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-black no-underline hover:no-underline font-bold text-3xl lg:text-4xl"
              href="/portal-de-compras"
              style={{ color: isHovering ? 'green' : 'black' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img className="h-20 pr-2 fill-current inline" src={process.env.PUBLIC_URL + '/Marca_TRE.svg'} >

                {/* SVG content */}
              </img>
              Portal de Compras
            </a>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-green-600 lg:bg-transparent lg:p-0 z-15">
            <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl font-semibold">
              <li>
                <NavLink
                  href="#" className="hover:underline"
                  style={{ color: hoverStates[0] ? 'green' : 'black' }}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                  to=""> Início </NavLink>
              </li>

              <li>
                <NavLink
                  href="#" className="hover:underline"
                  style={{ color: hoverStates[1] ? 'green' : 'black' }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                  to="/planejamento-de-contratacoes"> Planejamento </NavLink>
              </li>

              <li>
                <NavLink
                  href="#" className="hover:underline"
                  style={{ color: hoverStates[2] ? 'green' : 'black' }}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                  to="/contratacoes"> Contratações </NavLink>
              </li>

              <li>
                <NavLink
                  href="#" className="hover:underline"
                  style={{ color: hoverStates[3] ? 'green' : 'black' }}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                  to="/licitacoes"> Licitações </NavLink>
              </li>

              <li>
                <NavLink
                  href="#" className="hover:underline"
                  style={{ color: hoverStates[4] ? 'green' : 'black' }}
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={() => handleMouseLeave(4)}
                  to="/normas">Normas</NavLink>
              </li>

              <li>
                <NavLink
                  href="#" className="hover:underline"
                  style={{ color: hoverStates[5] ? 'green' : 'black' }}
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={() => handleMouseLeave(5)}
                  to="/sistema-de-registro-de-preco"> Registro de preços </NavLink>
              </li>

              <li>
                <NavLink
                  href="#" className="hover:underline"
                  style={{ color: hoverStates[6] ? 'green' : 'black' }}
                  onMouseEnter={() => handleMouseEnter(6)}
                  onMouseLeave={() => handleMouseLeave(6)}
                  to="/sistemas"> Sistemas </NavLink>
              </li>

              </ul>
              <div>
                
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// const NavItem = ({ text }) => (
//   <li className="mr-3">
//     <a className="inline-block text-black font-bold no-underline" href="#">
//       {text}
//     </a>
//   </li>
// );

export default Navbar;
