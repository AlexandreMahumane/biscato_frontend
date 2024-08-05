import pic2 from "../../../public/pic2.jpg";
import photo1 from "../../../public/photo1.jpg";
import { PhotoSection } from "./photoSection";
import { TextInfo } from "./textInfo";
export const AboutTheApp = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center space-y-20 mt-20">
        <div className="flex sm:flex-col sm:text-center sm:space-x-0 space-x-14">
          <div className="flex sm:flex-col sm:w-full sm:h-full flex-wrap h-24 w-96">
            <h1 className="text-6xl font-bold"> Quem somos nós??</h1>
            <p>
              Somos uma empresa especializada em trazer Soluções inovadoras para
              mercado de trabalho nacional.
            </p>
          </div>
          <img src={pic2} alt="worker pic" className="rounded-lg w-full h-96" />
        </div>
      </div>

      <section className="bg-gray-100 sm:mt-5 text-center rounded-3xl h-fit p-10">
        <div className="w-full flex-col flex items-center mb-10 justify-center">
          <h3 className="font-bold mb-10">qual e o nosso compromisso?</h3>
          <p className="flex flex-wrap text-xl w-72">
            Procura um trabalhor? Se cadastre como cliente e faça parte do grupo
            de pessoas que buscam soluções rapidas para resolver seus problemas
            com um freelancer, proximo de si! cadastre-se aqui!
          </p>
        </div>

        <PhotoSection />
        <TextInfo />

        <img src={photo1} className="opacity-50" alt="" />
      </section>
    </div>
  );
};
