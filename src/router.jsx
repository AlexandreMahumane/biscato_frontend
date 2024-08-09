
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Home';
import { ClientRegistrationForm } from './pages/ClientSignup';
import { FreelancerRegistrationForm } from './pages/FreelancerSignup';
import ClientMain from './pages/ClientMain';
import Dashboard from './components/Dashboard';



export const route = createBrowserRouter([
    {
     path: "/",
     element: <Main/>
    },
    {
     path: "/client",
     element: <ClientMain/>
    },
    
    {
     path: "/signup/client",
     element: <ClientRegistrationForm/>
    },
    {
     path: "/adm",
     element: <Dashboard/>
    },
    
    
    {

    path: "/signup/freelancer",
    element: <FreelancerRegistrationForm/>
    },
   


   
   
   ]);