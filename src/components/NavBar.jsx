//import { Link } from 'react-scroll';
import "../App.css";
import { Link } from "react-router-dom";
import elalto from "../assets/elalto1.png";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../locales/i18n"; // Importa la configuración de i18next
// import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="navbar">
      <div className="absolute top-20 right-10">
        <button
          onClick={toggleDropdown}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        //    style={{ top: '100px', left: '20px' }}
        >
          {/* {" "} */}
          Mostrar Opciones
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            <a
              href="/web1/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 text-white px-4 py-2 rounded-t-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Mirador
            </a>
            <a
              href="/web2/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 text-white px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Mirador1
            </a>
            <a
              href="/web3/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 text-white px-4 py-2 rounded-b-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Mirador2
            </a>
          </div>
        )}
      </div>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={elalto} alt="Logo" className="navbar-logo-img" />
          </div>
          <div className="navbar-links">
            <ul className="navbar-links-list">
              <li>
                <Link to="/" className="navbar-link">
                  Principal
                </Link>
              </li>
              <li>
                <Link to="guia" className="navbar-link">
                  Guias Turisticos
                </Link>
              </li>

              <li>
                <Link to="login" className="navbar-link">
                  Login
                </Link>
              </li>
              {/* <li>
                                <LanguageSwitcher />
                            </li> */}
              <li>
                <Link to="arquitectura" className="navbar-link">
                  Turismo Arquitectonico
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
