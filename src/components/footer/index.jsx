import { GithubLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center lg:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Freelancer</h3>
            <p className="mb-1">Biscato © 2024 Todos os direitos reservados</p>
            <p className="mb-1">
              <a href="/terms" className="hover:underline">Termos de uso</a>
            </p>
            <p>
              <a href="/privacy" className="hover:underline">Política de privacidade</a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Redes Sociais</h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center">
                <GithubLogo className="mr-2" size={22} />
                <a href="https://github.com/GeorginaCB/Georgina-Cumbe.git" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                  Georgina Cumbe
                </a>
              </div>
              <div className="flex items-center">
                <GithubLogo className="mr-2" size={22} />
                <a href="https://github.com/AlexandreMahumane" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                  Alexandre Mahumane
                </a>
              </div>
              <div className="flex items-center">
                <GithubLogo className="mr-2" size={22} />
                <a href="https://github.com/LuisMateus" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                  Luis Mateus
                </a>
              </div>
              <div className="flex items-center">
                <GithubLogo className="mr-2" size={22} />
                <a href="https://github.com/PChimuze" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                  Pedro Chimuze
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Formas de Pagamento</h3>
            <div className="flex justify-center space-x-4">
              <img src="#" alt="Visa" className="w-16" />
              <img src="#" alt="Mpesa" className="w-16" />
              <img src="#" alt="Emola" className="w-16" />
            </div>
          </div>
          
      
        </div>
      </div>
    </footer>
  );
};
