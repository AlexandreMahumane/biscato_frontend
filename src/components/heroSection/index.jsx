import React from "react";
import photo1 from "../../../public/photo1.jpg";

export const HeroSection = () => {
  return (
    <section className="flex w-full text-white justify-center">
      <div className="w-[800px] sm:w-full">
        <div
          className="relative bg-cover w-full h-96"
          style={{ backgroundImage: `url(${photo1})` }}
        >
          <div className="bg-blue-50% top-44 sm:top-10 sm:text-xl sm:h-fit text-2xl rounded-lg h-52 w-11/12 absolute">
            <h1 className="text-4xl font-bold">
              Contrate os melhores freelancer para qualquer trabalho, tudo isso
              online.
            </h1>
            <p>
              Maior mercado freelancer de Mocambique Qualquer trabalho que você
              possa imaginar Economize até 90% e obtenha orçamentos grátis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
