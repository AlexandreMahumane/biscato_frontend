import React from "react";
import photo1 from "../../../public/photo1.jpg";

export const HeroSection = () => {
  return (
    <section className="flex w-screen  text-white justify-center">
      <div className="w-full flex justify-center sm:w-full">
        <div
          className=" bg-cover flex items-end w-3/4 h-96"
          style={{ backgroundImage: `url(${photo1})` }}
        >
          <div className="bg-blue-50% p-2 mb-1 sm:text-xl sm:h-fit text-2xl rounded-lg h-fit w-11/12 ">
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
