import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Novos Freelancers',
        data: [30, 45, 35, 60, 50, 80, 70],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
      {
        label: 'Novos Clientes',
        data: [20, 30, 40, 50, 60, 70, 90],
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
      },
    ],
  };

  const pieData = {
    labels: ['Categoria A', 'Categoria B', 'Categoria C'],
    datasets: [
      {
        label: 'Solicitações de Serviço',
        data: [300, 150, 100],
        backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)'],
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Novos Freelancers e Clientes</h3>
        <Line data={lineData} />
      </div>
      <div>
        <h3>Distribuição de Solicitações de Serviço</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Dashboard;
