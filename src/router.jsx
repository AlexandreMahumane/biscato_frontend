import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import { ClientRegistrationForm } from './pages/ClientSignup';
import { SearchFreelancer } from './pages/SearchFreelancer';
import { FreelancerProfile } from './pages/FreelancerProfile';
import ClientPage from './pages/clientPage';
import { FreelancerRegistrationForm } from './pages/FreelancerSignup';


export const route = createBrowserRouter([
    {
     path: "/",
     element: <Main/>
    },
    {
     path: "/client",
     element: <ClientRegistrationForm/>
    },
    {
     path: "/signup/client",
     element: <ClientRegistrationForm/>
    },
    {
    path: "/SearchFreelancer",
     element: <SearchFreelancer/>
    },
    {
    path: "/freelancerProfile",
    element: <FreelancerProfile/>
    },
    {
    path: "/signup/freelancer",
    element: <FreelancerRegistrationForm/>
    },
    {
    path: "/clientpage",
    element: <ClientPage/>
    },

   
   
   ]);