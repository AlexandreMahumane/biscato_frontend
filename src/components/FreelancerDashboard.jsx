import React from 'react';
import Chart from './Chart';

const FreelancerDashboard = () => {
  const barData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Ganhos Mensais',
        data: [500, 700, 900, 650, 800],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Ganhos: $${context.raw}`;
          },
        },
      },
    },
  };

  const lineData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Horas Trabalhadas',
        data: [20, 25, 30, 35, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Horas: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold mb-6">Painel do Freelancer</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Ganhos Mensais</h2>
          <Chart type="bar" data={barData} options={barOptions} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Horas Trabalhadas</h2>
          <Chart type="line" data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;

