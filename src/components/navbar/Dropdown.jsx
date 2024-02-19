import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ item }) => {

  return (
    <div className="absolute z-10 bg-gray-200 divide-y divide-gray-300 rounded-lg shadow">
      <ul>
        {item.elements.map((subItem, subIndex) => {
          const subItemName = Object.keys(subItem)[0];
          const subItemUrl = subItem[subItemName];
          return (
            <li key={subIndex}>
              <NavLink to={subItemUrl.replace("/portal-de-compras/","/")} className="block px-4 py-2 text-gray-800 text-lg hover:bg-gray-300 hover:text-green-700">
                {subItemName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;