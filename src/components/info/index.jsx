import React from "react";

export const AboutTheApp = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Introdução */}
      <section className="flex flex-col items-center justify-center space-y-10 mt-10 text-center">
        <div className="flex flex-col space-y-4 max-w-4xl">
          <h1 className="text-6xl font-bold leading-tight">
            Quem somos nós?
          </h1>
          <p className="text-lg">
            Somos uma empresa especializada em trazer soluções inovadoras para
            o mercado de trabalho nacional.
          </p>
        </div>
      </section>

      {/* Compromisso */}
      <section className="w-full max-w-3xl flex flex-col items-center mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Qual é o nosso compromisso?
        </h3>
        <p className="text-xl">
          Está procurando um trabalhador? Cadastre-se como cliente e junte-se
          ao grupo de pessoas que buscam soluções rápidas para resolver seus
          problemas com um freelancer próximo de você! 
          <a href="/signup" className="text-blue-500 underline ml-2">Cadastre-se agora mesmo!</a>
        </p>
      </section>
    </div>
  );
};

export default AboutTheApp;
