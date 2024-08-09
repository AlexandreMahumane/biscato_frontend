import React from "react";
import photos from "../../../public/photoS.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; 
import { Autoplay } from "swiper/modules";

export const App = () => {
  return (
    <div>
      {/* Carousel */}
      <div className="relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000 }} // Rotaciona a cada 3 segundos
          loop={true} // Permite rotação infinita
        >
          {[
            {
              title: "Contrate os melhores freelancers para qualquer trabalho, tudo isso online. ",
              description: "Maior mercado freelancer de Moçambique. Qualquer trabalho que você possa imaginar. Economize até 90% e obtenha orçamentos grátis..",
              imageUrl: "https://img.freepik.com/free-photo/portrait-diverse-women-together_23-2151682145.jpg?t=st=1723159439~exp=1723163039~hmac=2f81fae8267f7845af517fc59b017cd87bf558ba471e77aac213e2b917c9fe24&w=1060"
            },
            {
              title: "Cuidados com o Carro",
              description: "Manutenção regular é crucial para manter seu veículo em ótimo estado.",
              imageUrl: "https://img.freepik.com/free-photo/expert-does-maintenance-client-car_482257-76125.jpg?t=st=1723160239~exp=1723163839~hmac=fc2780206de0a3b51e93aae98b5ce39815ad17f647e7858a36be5aa43b1b9518&w=1060"
            },
            {
              title: "Segurança no Trabalho",
              description: "Equipamento de proteção é essencial para a segurança no ambiente de trabalho.",
              imageUrl: "https://img.freepik.com/premium-photo/row-men-wearing-hard-hats-one-which-has-word-dont-it_1022967-35638.jpg?w=1060"
            },
            {
              title: "Manutenção de Sistemas HVAC",
              description: "Garantir o funcionamento eficiente dos sistemas de climatização é crucial para conforto e eficiência energética.",
              imageUrl: "https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18261.jpg?t=st=1723159959~exp=1723163559~hmac=85c6b813acb2cfdf965d77e70e872c31680c810ae187e7e8b24d40db133b6e5e&w=996"
            },
            {
              title: "Mobilidade Urbana",
              description: "A mobilidade eficiente nas cidades contribui para uma melhor qualidade de vida e menos congestionamento.",
              imageUrl: "https://img.freepik.com/free-photo/man-with-bicycle-city_23-2149026647.jpg?t=st=1723159799~exp=1723163399~hmac=8007e0367c88b1ec754bfea71726653588a135edc6d4249ea6e3eb808fa8072d&w=996"
            },
            {
              title: "Organização e Ação Social",
              description: "O engajamento e a organização comunitária são fundamentais para promover mudanças positivas.",
              imageUrl: "https://img.freepik.com/free-photo/group-workers-organizing-protest_23-2151546518.jpg?t=st=1723159709~exp=1723163309~hmac=bd62df5264de6edf9ee551829ffac2dac08b2527c161003ba4397cfe34d9029a&w=1060"
            },
            {
              title: "Vida no Canteiro de Obras",
              description: "O ambiente de trabalho na construção é dinâmico e exige atenção constante à segurança e eficiência.",
              imageUrl: "https://img.freepik.com/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431433.jpg?t=st=1723159650~exp=1723163250~hmac=f143a8ab7a24053572d6cefc057b029fac2986ddf98904ae55844a908c10a09e&w=1060"
            },
          ].map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div
                className="w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              >
                <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50 p-6 z-20">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-lg">{slide.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Section */}
      <section className="    text-white">
      <div className="mr-10 justify-center space-x-3 items-center flex rounded-box">
  <div className="w-[460px] h-[440px] ">
    <img
      src="https://img.freepik.com/free-photo/african-american-car-mechanic-with-face-mask-examining-engine-breakdown-workshop_637285-8620.jpg?t=st=1723200001~exp=1723203601~hmac=10a50e42bc87a8eec9d051f82eaa2ef0c0a13d9dc7cfbe87473733d804b609f3&w=996"
      alt="Burger" 
      className="h-full"/>
      
  </div>
  <div className="w-[460px] h-[440px] ">
    <img
      src="https://img.freepik.com/free-photo/young-african-american-builder-man-wearing-construction-vest-safety-helmet-holding-paint-roller-paint-brush-standing-with-confused-expression-with-arms-hands-raised_141793-19043.jpg?t=st=1723200160~exp=1723203760~hmac=93139a66d28feb6d22982a9a8b796a5be9c16fa3bb59b9ca8a7d38deb68f7ff0&w=996"
      alt="Burger"
      className="h-full" />
  </div>
  <div className="w-[460px] h-[440px] ">
    <img
      src="https://img.freepik.com/free-photo/monochrome-scene-depicting-life-workers-construction-industry-site_23-2151431548.jpg?t=st=1723200410~exp=1723204010~hmac=f581fa2d39c81f8ef0939c844bcfd4f5a8aeb48499b74c1bee23d726f589d400&w=1060"
      alt="Burger" 
      className="h-full"/>
  </div>
  
</div>
      </section>
    </div>
  );
};

export default App;
