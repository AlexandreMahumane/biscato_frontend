

import React from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';


const FreelancerPage = () => {
  return (
    <div>
      <Header/>
      <main>
        <h1>Bem-vindo à Página do Freelancer</h1>
        <div className="cards-container">
          <div className="card">
            <h2>Card 1</h2>
            <p>Conteúdo do Card 1</p>
          </div>
          <div className="card">
            <h2>Card 2</h2>
            <p>Conteúdo do Card 2</p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default FreelancerPage;






