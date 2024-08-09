import React from 'react';
import Chart from './Chart';

const ClientDashboard = () => {
  const barData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Orçamento do Projeto',
        data: [30, 45, 60, 35, 50],
        backgroundColor: 'rgba(0, 102, 204, 0.2)', // Azul marinho claro
        borderColor: 'rgba(0, 102, 204, 1)',       // Azul marinho
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
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
    },
  };

  const lineData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Progresso do Projeto',
        data: [10, 20, 30, 40, 50],
        borderColor: 'rgba(0, 204, 0, 1)',        // Verde forte
        backgroundColor: 'rgba(0, 204, 0, 0.2)',  // Verde forte claro
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
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-6">Painel do Cliente</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md w-full ]"> {/* Ajustei a altura para metade da tela */}
          <h2 className="text-lg font-semibold mb-4">Resumo de Atividades</h2>
          <div className="w-full">
            <Chart type="bar" data={barData} options={barOptions} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-full h-[50vh]"> {/* Ajustei a altura para metade da tela */}
          <h2 className="text-lg font-semibold mb-4">Progresso do Projeto</h2>
          <div className="w-full">
            <Chart type="line" data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
