
import React from 'react';

const ModalComponent = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Informações do Cliente</h2>
        <p><strong>Nome:</strong> {data.name}</p>
        <p><strong>Número:</strong> {data.number}</p>
        <p><strong>Localização:</strong> {data.location}</p>
        <button 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition" 
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
