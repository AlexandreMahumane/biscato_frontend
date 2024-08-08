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
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 2,
      },
      {
        label: 'Novos Clientes',
        data: [20, 30, 40, 50, 60, 70, 90],
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderWidth: 2,
      },
    ],
  };

  const pieData = {
    labels: ['Trabalhos Requisitados', 'numero de Freelancers'],
    datasets: [
      {
        label: 'Solicitações de Serviço',
        data: [300, 150,],
        backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Dashboard do Administrador</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Novos Freelancers e Clientes</h3>
          <div className="w-full h-[300px]">
            
            <Line data={lineData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
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
                },
                y: {
                  grid: {
                    borderDash: [5, 5],
                  },
                },
              },
            }} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Distribuição de Solicitações de Serviço</h3>
          <div className="w-[300px] h-[300px]">
            <Pie data={pieData} options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
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
