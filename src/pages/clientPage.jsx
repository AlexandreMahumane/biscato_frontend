import React, { useState } from 'react';
import Modal from 'react-modal';
import { Footer } from '../components/footer';
import {Header} from '../components/header';

Modal.setAppElement('#root');

const ClientPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const successMessage = "Your registration was successful!"; 

  const handleOptionClick = (option) => {
    switch (option) {
      case 'feedback':
        setModalContent('Feedback sent successfully!');
        setModalIsOpen(true);
        break;
      case 'history':
        setModalContent(
          `
          History of services:
          - Service 1: Date: 2024-08-01, Time: 10:00 AM, Service: Consultation
          - Service 2: Date: 2024-08-03, Time: 02:00 PM, Service: Follow-up
          `
        );
        setModalIsOpen(true);
        break;
      default:
        console.log('Unknown option:', option);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Header/>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Your Client Dashboard</h1>
        <p>Your registration was successful. Explore your dashboard to get started.</p>
        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
          <h2 className="text-2xl font-semibold mb-4">{successMessage}</h2>
          <div className="flex justify-around mt-4">
            <button
              onClick={() => handleOptionClick('feedback')}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Give Feedback
            </button>
            <button
              onClick={() => handleOptionClick('history')}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              View History
            </button>
          </div>   
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Information"
        className=" flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Notification</h2>
          <p>{modalContent}</p>
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </Modal>       

        </div>

     
      </div>


      <Footer />

      
    </>
  );
};

export default ClientPage;
