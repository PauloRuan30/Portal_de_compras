import React, {useState} from 'react';
import Submenu from './Submenu';
import { Link, animateScroll as scroll, } from 'react-scroll'

const Navbar = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
   
  <header class="flex flex-col top-0 sticky">
    <div class="bg-slate-100">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="https://www.tre-ce.jus.br" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="./TRE_Logo.png" class="h-8" alt="TRE Logo" />
                <span class="self-center text-3xl font-semibold whitespace-nowrap" style={{color: isHovering ? 'lightgreen':'black'}} 
                  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Portal de Compras</span>
            </a>
            <div class="flex items-center space-x-6 rtl:space-x-reverse">
               
            </div>
        </div>
    </div>
  <Submenu/>
  </header>
  );
};

export default Navbar;
