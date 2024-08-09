import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import { Profissionais } from './Profissionais';
import { Users } from '../pages/users';

const Dashboard = () => {

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Novos Freelancers',
        data: [30, 45, 35, 60, 50, 80, 70],

        borderColor: 'rgba(76,193,192,1)', // Cores para o gráfico de linhas
        backgroundColor: 'rgba(76,193,192,0.2)',

        borderWidth: 2,
      },
      {
        label: 'Novos Clientes',

        data: [30, 30, 40, 50, 60, 70, 90],
        borderColor: 'rgba(153,102,255,1)', 
        backgroundColor: 'rgba(153,102,255,0.2)', 

        borderWidth: 2,
      },
    ],
  };

  const pieData = {

    labels: ['Novos Freelancers', 'Novos Clientes'],
    datasets: [
      {
        label: 'Solicitações de Serviço',
        data: [60, 30], 
        backgroundColor: ['rgba(76,193,192,0.6)', 'rgba(153,102,255,0.6)'], 
        borderColor: ['rgba(76,193,192,1)', 'rgba(153,102,255,1)'], 

        borderWidth: 1,
      },
    ],
  };

  return (

    <div className="min-h-screen bg-white p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Dashboard do Administrador</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-600 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Novos Freelancers e Clientes</h3>
          <div className="w-full h-[300px]">

            <Line data={lineData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',

                  labels: {
                    color: 'white',
                  },

                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return `${context.dataset.label}: ${context.raw}`;
                    },
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },

                  ticks: {
                    color: 'white',
                  },

                },
                y: {
                  grid: {
                    borderDash: [5, 5],

                    color: 'white',
                  },
                  ticks: {
                    color: 'white',

                  },
                },
              },
            }} />
          </div>
        </div>

        <div className="bg-blue-600 p-6 rounded-lg shadow-lg flex flex-col items-center justify-start">
          <h3 className="text-2xl font-semibold mb-4 text-white text-center">Distribuição de Solicitações de Serviço</h3>
          <div className="w-[300px] h-[300px] mt-4"> 

            <Pie data={pieData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',

                  labels: {
                    color: 'white',
                  },
                },

                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return `${context.label}: ${context.raw}`;
                    },
                  },
                },
              },
            }} />
          </div>

        </div>
        <Profissionais/>
      </div>
      <Users/>
    </div>
  );
};

export default Dashboard;
