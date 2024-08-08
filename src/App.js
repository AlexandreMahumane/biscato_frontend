import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Freelancers from './components/Freelancers';
import Clients from './components/Clients';
import ClientDashboard from './components/ClientDashboard';
import { FreelancerStatus } from './pages/freelancerStatus';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/freelancers">Freelancers</Link> | <Link to="/clients">Clients</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/ClientDashboard " element={<ClientDashboard />} />

          <Route path="/clients" element={<Clients />} />
          <Route path="/adm" element={<Dashboard />} />
          <Route path="/adm" element={<Dashboard />} />
          




        </Routes>
      </div>
    </Router>
  );
}

export default App;
