/* eslint-disable no-constant-condition */
/* eslint-disable react/no-this-in-sfc */
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useMedia from '../hooks/Usemedia';
import './Navbar.css';
import logo from '../../assets/logoNovo.png';

export default function Navbar() {
  const { pathname } = useLocation();
  const mobile = useMedia('(max-width: 67.5rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      {mobile && (
        <button
          className={`${'mobileButton'} ${mobileMenu && 'mobileButtonActive'}`}
          aria-label="Menu"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <navbar
        className={`${mobile ? 'navbarMobile' : 'navbar'} ${mobileMenu && 'navbarMobileActive'}`}
      >
        <img className="logo" src={logo} alt="logo" />
        <section className="navbar-links">
          <div className="tooltip">
            {pathname === '/' ? (
              <a href="#mprjDigital" className="dropdow-button">
                O que é o MPRJ Digital?
              </a>
            ) : (
              <NavLink to="/" className="dropdow-button">
                O que é o MPRJ Digital?
              </NavLink>
            )}
            <span className="tooltiptext">Conheça a nossa visão de dados abertos</span>
          </div>
          <div className="dropdown">
            <div className="tooltip">
              {pathname === '/' ? (
                <a href="#parceiros" className="dropdow-button">
                  Parceiros
                </a>
              ) : (
                <NavLink to="/" type="button" className="dropbtn-button">
                  Parceiros
                </NavLink>
              )}
              <span className="tooltiptext">Conheça os setores envolvidos nessa iniciativa</span>
              {/* <div className="dropdown-content">
                <NavLink to="/parceiro/cadg">Cadg</NavLink>
            </div> */}
            </div>
          </div>
          <div className="dropdown">
            <div className="tooltip">
              {pathname === '/' ? (
                <a href="#produtos" className="dropdow-button">
                  Produtos
                </a>
              ) : (
                <NavLink to="/" type="button" className="dropbtn-button">
                  Produtos
                </NavLink>
              )}
              <span className="tooltiptext">Navegue e conheça nossos produtos e sistemas</span>
              {/* <div className="dropdown-content">
                <NavLink to="/produto/farol" type="button" className="dropbtn">
                  Farol
                </NavLink>
                <NavLink to="/produto/parquet_digital" type="button" className="dropbtn">
                  Parque Digital
                </NavLink>
          </div> */}
            </div>
          </div>
          <div className="tooltip">
            {pathname === '/' ? (
              <a href="#repositorios" className="dropdow-button">
                Repositórios
              </a>
            ) : (
              <NavLink to="/" className="dropdow-button">
                Repositórios
              </NavLink>
            )}
            <span className="tooltiptext">Encontre aqui todas as nossas Acervo de Dados</span>
          </div>
          {/* <div className="dropdown">
          <div className="tooltip">
            <a href=".#" type="button" className="dropbtn" id="basic-button">
              Repositórios
            </a>
            <span className="tooltiptext">Encontre aqui todas os nossos acervos de dados</span>
            <div className="dropdown-content">
              <NavLink to="/produto">Integra</NavLink>
              <NavLink to="/produto">Farol</NavLink>
              <NavLink to="/produto">Ouvidoria</NavLink>
            </div>
          </div>
        </div> */}
          <div className="tooltip">
            {pathname === '/' ? (
              <a href="#rodape" className="dropdow-button">
                Dúvidas e Reclamações
              </a>
            ) : (
              <NavLink to="/" className="dropdow-button">
                Dúvidas e Reclamações
              </NavLink>
            )}
            <span className="tooltiptext">Tem uma Reclamação ou precisa da nossa ajuda.</span>
          </div>
        </section>
      </navbar>
    </>
  );
}
