import React from 'react';
import pic1 from '../../../public/pic1.jpg'; 

export const HeroSection = () => {
  return (
    <section className="relative h-screen  bg-center" style={{ backgroundImage: `url(${pic1})` }}>
      <div className="absolute "></div>
      <div className="relative top-20 sm:top-10
            flex flex-col items-center bg-blue-600 
            bg-opacity-50 justify-center 
            text-center px-4 py-3 sm:p-3
            w-3/5 h-3/4
            sm:h-fit
            ml-16
            ">
            <div className='text-start sm:text-center'>
        <h1 className="text-2xl font-bold mb-4">Contrate os melhores freelancer para 
          qualquer trabalho, tudo isso online.</h1>
        </div>
        <p className="text-lg sm:mb-3  mb-8">Maior mercado freelancer de Moçambique<br />Qualquer trabalho que você possa imaginar<br />Econômize até 90% e obtenha orçamentos grátis</p>
        <div className="flex sm:flex-col sm:space-x-0 sm:space-y-4 space-x-4">
          <a className=" px-4 py-2 rounded">Encontrar Freelancer</a>
          <a className=" border border-pink-300 px-4 py-2 rounded">Ganhar dinheiro</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
