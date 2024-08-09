import React from 'react';
import { GithubLogo,XLogo,YoutubeLogo } from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="w-full">
          <h3 className="text-lg font-bold">Biscato</h3>
          <p>Termos de uso</p>
          <p>Política de privacidade</p>
          <p>Biscato © 2024 Todos os direitos reservados</p>
        </div>

        <div className="w-full ">
          <div className="text-center">
            <h3 className="text-lg font-bold">Redes Sociais</h3>
            <div className="flex justify-center mt-4 space-x-4">
              <div className="flex flex-col">
                <div className="flex items-center ">
                  <GithubLogo className="mr-2" size={22} />
                  <a
                    href="https://github.com/GeorginaCB/Georgina-Cumbe.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Georgina Cumbe
                  </a>
                </div>
                <div className="flex items-center">
                  <GithubLogo className="mr-2" size={22} />
                  <a
                    href="https://github.com/AlexandreMahumane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Alexandre Mahumane
                  </a>
                </div>
                <div className="flex items-center">
                  <GithubLogo className="mr-2" size={22} />
                  <a
                    href="https://github.com/GeorginaCB/Georgina-Cumbe.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Luis Mateus
                  </a>
                </div>
                <div className="flex items-center">
                  <GithubLogo className="mr-2" size={22} />
                  <a
                    href="https://github.com/PChimuze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    Pedro Chimuze
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
  <h6 className="font-bold">Company</h6>
  <NavLink
    to="/"
    className={({ isActive }) => `text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
  >
    Home
  </NavLink>
  <NavLink
    to="/signup/client"
    className={({ isActive }) => `text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
  >
    Encontrar Freelancer
  </NavLink>
  <NavLink
    to="/signup/freelancer"
    className={({ isActive }) => `text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
  >
    Encontrar Trabalho
  </NavLink>
</div>

        <div>
          <h6 className="font-bold">Legal</h6>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>
      </div>

      <div className="bg-blue-600 text-white border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center text-center">
        <XLogo size={32} />
          <p>
            Biscato.
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav className="flex justify-center py-4">
  <div className="grid grid-flow-col gap-4">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <GithubLogo size={32} />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <YoutubeLogo size={32} />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <GithubLogo size={32} />
    </a>
  </div>
</nav>


      </div>
    </footer>
  );
}


