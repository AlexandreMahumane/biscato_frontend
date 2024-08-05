
import {  GithubLogo  } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="w-full">
            <h3 className="text-lg font-bold">Freelancer</h3>
            <p> Biscato © 2024 Todos os direitos reservados</p>
            <p>Termos de uso</p>
            <p>Política de privacidade</p>
          </div>
          <div className="w-full">
            <div className="text-center">
              <h3 className="text-lg font-bold">Redes Sociais</h3>
              
              <div className="flex justify-center mt-4 space-x-4"></div>
          <div className="flex items-center">
                  <GithubLogo className="mr-2" size={22} />
                  <a href="https://github.com/GeorginaCB/Georgina-Cumbe.git" target="_blank" rel="noopener noreferrer" className="text-blue-950 hover:underline">
                  Georgina Cumbe
                  </a>
                </div>
          <div className="flex items-center">
                  <GithubLogo className="mr-2" size={22} />
                  <a href="https://github.com/AlexandreMahumane" target="_blank" rel="noopener noreferrer" className="text-blue-950 hover:underline">
                  Alexandre Mahumane
                  </a>
                </div>
          <div className="flex items-center">
                  <GithubLogo className="mr-2" size={22} />
                  <a href="https://github.com/GeorginaCB/Georgina-Cumbe.git" target="_blank" rel="noopener noreferrer" className="text-blue-950 hover:underline">
                    Luis Mateus
                  </a>
                </div>
          <div className="flex items-center">
                  <GithubLogo className="mr-2" size={22} />
                  <a href="https://github.com/GeorginaCB/Georgina-Cumbe.git" target="_blank" rel="noopener noreferrer" className="text-blue-950 hover:underline">
                    Pedro Chimuze
                  </a>
                </div>
                </div>
              </div>
          
          </div>
    </footer>
  );
};
