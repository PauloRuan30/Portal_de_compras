import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import axios from "axios";

const Navbar = () => {
  const exceptions = [
    "/portal-de-compras/fornecedores",
    "/portal-de-compras/gestores-e-fiscais",
    "/portal-de-compras/unidades-requisitantes",
    "/portal-de-compras/comunicados",
    "/portal-de-compras/treinamento-para-editores",
  ];

  const [hoverStates, setHoverStates] = useState(Array(7).fill(false));
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para controlar se o menu hamburguer está aberto

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

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apps.tre-ce.jus.br/api-portal-de-compras"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="flex flex-col top-0 sticky backdrop-filter backdrop-blur-sm bg-opacity-90 bg-gray-300 shadow">
      <nav id="header" className="mx-auto p-2 px-5 w-full top-0 text-black">
        <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-black no-underline hover:no-underline font-bold text-3xl lg:text-4xl"
              href={process.env.PUBLIC_URL}
            >
              <img
                className="h-20 pr-2 fill-current inline"
                src={process.env.PUBLIC_URL + "/Marca_TRE.svg"}
                alt="Logo"
              />
              Portal de Compras
            </a>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-green-600 lg:bg-transparent lg:p-0 z-15">
            <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl font-semibold">
              {items.map((item, index) => {
                const itemName = Object.keys(item)[0];
                const itemUrl = item[itemName];
                if (!exceptions.includes(itemUrl)) {
                  return (
                    <li key={index}>
                      <div
                        className="relative inline-block"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                      >
                        <NavLink
                          className="hover:underline"
                          style={{
                            color: hoverStates[index] ? "green" : "black",
                          }}
                          to={itemUrl.replace("/portal-de-compras/", "/")}
                        >
                          {itemName}
                        </NavLink>
                        {hoverStates[index] &&
                          item.elements &&
                          item.elements.length > 0 && <Dropdown item={item} />}
                      </div>
                    </li>
                  );
                } else {
                  return <></>;
                }
              })}
            </ul>
          </div>
          {/* Menu Hamburguer */}
          <div className="lg:hidden">
            <button
              className="text-black bg-gray-400 cursor-pointer focus:outline-none"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            {isNavOpen && (
              <div className="absolute top-24 left-0 w-full backdrop-filter backdrop-blur-sm bg-opacity-100 bg-gray-300 shadow-lg">
                <ul className="p-4 text-lg font-semibold">
                  {items.map((item, index) => {
                    const itemName = Object.keys(item)[0];
                    const itemUrl = item[itemName];
                    if (!exceptions.includes(itemUrl)) {
                      return (
                        <li key={index} className="py-2">
                          <NavLink
                            className="text-black hover:text-green-600"
                            to={itemUrl.replace("/portal-de-compras/", "/")}
                          >
                            {itemName}
                          </NavLink>
                        </li>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ul>
              </div>
            )}
          </div>
          {/* Fim do Menu Hamburguer */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
