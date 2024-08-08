import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { XCircle } from "@phosphor-icons/react"; 

Modal.setAppElement('#root');

const ClientMain = () => {
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Novo estado para o alerta
  const abortControllerRef = useRef(null);

  const successMessage = "Your registration was successful!";

  const FeedbackModal = () => {
    const [feedback, setFeedback] = useState('');

    const submitFeedback = () => {
      console.log('Feedback enviado:', feedback);
      setFeedbackModalOpen(false);
      setShowAlert(true); // Exibe o alerta após enviar o feedback
    };

    const handleClose = () => {
      setFeedbackModalOpen(false);
    };

    return (
      <Modal
        isOpen={feedbackModalOpen}
        onRequestClose={handleClose}
        contentLabel="Feedback Modal"
        className="modal-overlay"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <button
            onClick={handleClose}
            className="btn-close absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <XCircle size={24} />
          </button>
          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <label htmlFor="feedback" className="block text-lg font-semibold text-gray-800 mb-2">
              Feedback:
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback..."
              className="border border-gray-300 rounded-md p-2 w-full h-20 resize-none mb-4"
            ></textarea>
            <button
              onClick={submitFeedback}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </Modal>
    );
  };

  const HistoryModal = () => {
    const handleClose = () => {
      setHistoryModalOpen(false);
    };

    return (
      <Modal
        isOpen={historyModalOpen}
        onRequestClose={handleClose}
        contentLabel="History Modal"
        className="modal-overlay"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <button
            onClick={handleClose}
            className="btn-close absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <XCircle size={24} />
          </button>
          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-4">History of services:</h3>
            <ul className="list-disc pl-5">
              <li>Service 1: Date: 2024-08-01, Time: 10:00 AM, Service: Consultation</li>
              <li>Service 2: Date: 2024-08-03, Time: 02:00 PM, Service: Follow-up</li>
            </ul>
          </div>
        </div>
      </Modal>
    );
  };

  const handleSearch = async () => {
    // Lógica para realizar a pesquisa de freelancers

    // Exemplo simples para demonstração
    setLoading(true);
    setError('');
    setNoResults(false);

    try {
      // Simulando uma resposta com resultados
      const mockResults = [{ name: 'Freelancer 1' }, { name: 'Freelancer 2' }];
      setResults(mockResults);
      setShowAlert(true); 
    } catch (error) {
      setError('Failed to fetch results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
  };

  return (
    <>
      <Header showAlert={showAlert} setShowAlert={setShowAlert} />
      <div className="container mx-auto p-4 md:flex md:justify-between">
        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6 md:mr-4 transition-transform duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Your Client Dashboard</h1>
          <div className="flex justify-around">
            <button
              onClick={() => setFeedbackModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Send Feedback
            </button>
            <button
              onClick={() => setHistoryModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              View History
            </button>
          </div>
        </div>

        <FeedbackModal />
        <HistoryModal />

        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6 md:mr-4 transition-transform duration-300 hover:scale-105">
          <h2 className="text-lg font-bold mb-4 text-center">Freelancer Information</h2>
          <div className="mb-4">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select-category mt-2 w-full"
            >
              <option value="">Select a category</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
              <option value="designer">Designer</option>
            </select>
          </div>
          <div className="mb-4">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your description..."
              className="border border-gray-300 rounded-md p-2 w-full h-20 resize-none"
            ></textarea>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handleSearch}
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer`}
              disabled={loading || !category || !description}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <button
              onClick={handleCancel}
              className={`bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-pointer`}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {noResults && <p className="text-center text-gray-500">No results found.</p>}
      {!loading && !noResults && results.length > 0 && (
        <div className="container mx-auto p-4">
          <ul className="list-disc pl-5">
            {results.map((result, index) => (
              <li key={index} className="mb-2">{result.name}</li>
            ))}
          </ul>
        </div>
      )}

      <Footer/>
    </>
  );
};

export default ClientMain;
