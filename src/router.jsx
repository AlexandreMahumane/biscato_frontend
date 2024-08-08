
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import { ClientRegistrationForm } from './pages/ClientSignup';
import { FreelancerRegistrationForm } from './pages/FreelancerSignup';
import ClientMain from './pages/ClientMain';



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

    path: "/signup/freelancer",
    element: <FreelancerRegistrationForm/>
    },
   


   
   
   ]);