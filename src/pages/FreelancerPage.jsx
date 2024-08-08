
import React, { useState } from 'react';


import { UserCircle } from "@phosphor-icons/react";
import { Header } from '../components/header';
import { Footer } from '../components/footer';


const FreelancerPage = () => {
  const [historics, setHistorics] = useState([
    { id: 1, title: 'Card 1', content: 'Conteúdo do Card 1', name: 'Cliente 1', number: '123456789', location: 'Localização 1' },
    { id: 2, title: 'Card 2', content: 'Conteúdo do Card 2', name: 'Cliente 2', number: '987654321', location: 'Localização 2' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ name: '', number: '', location: '' });

  const removeHistoric = (id) => {
    setHistorics(historics.filter(historic => historic.id !== id));
  };


  const openModal = (name, number, location) => {
    setModalData({ name, number, location });
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <main className="p-4 flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1 flex flex-col gap-8">
    
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Notification</h1>
            <div className="flex-1 flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-lg">
              {historics.map(historic => (
                <div key={historic.id} className="bg-gray-200 rounded-lg shadow-lg p-4 w-full">
                  <h2 className="text-xl font-semibold mb-2">{historic.title}</h2>
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" 
                    onClick={() => openModal(historic.name, historic.number, historic.location)}
                  >
                    Verificar
                  </button>
                  <p>{historic.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex-1 flex flex-col">
              <h1 className="text-2xl font-bold mb-4">Historic</h1>
              <div className="flex-1 flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-lg">
                {historics.map(historic => (
                  <div key={historic.id} className="bg-gray-200 rounded-lg shadow-lg p-4 w-full flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">{historic.title}</h2>
                      <p>{historic.content}</p>
                    </div>
                    <button
                      onClick={() => removeHistoric(historic.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-lg">
          <div className="flex justify-center items-center mb-8">
            <UserCircle size={60} />
          </div>
          <h1 className="text-2xl font-bold text-center mb-8">Name</h1>
          <p>Phone: 84668647545874</p>
          <p>Servicos: 999</p>
          <p>Avaliacao:</p>
          <p>Categoria: Pedreiro</p>
          <h1 className="text-2xl font-bold mt-8 mb-4">Comentarios</h1>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-200 rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Card 1</h2>
              <p>Conteúdo do Card 1</p>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Card 2</h2>
              <p>Conteúdo do Card 2</p>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Card 3</h2>
              <p>Conteúdo do Card 3</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <ModalComponent 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        data={modalData} 
      />
    </div>
  );
};

export default FreelancerPage;
