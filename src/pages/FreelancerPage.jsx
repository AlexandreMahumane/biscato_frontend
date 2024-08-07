

import React from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';


const FreelancerPage = () => {
  return (
    <div>
    <Header />
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-6">Notification</h1>
      <div className="flex flex-col gap-4 items-center p-4 border-2 border-gray-300 rounded-lg">
        <div className="bg-gray-200 rounded-lg shadow-lg p-4 w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p>Conteúdo do Card 1</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-lg p-4 w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p>Conteúdo do Card 2</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-lg p-4 w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p>Conteúdo do Card 3</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
};

export default FreelancerPage;




