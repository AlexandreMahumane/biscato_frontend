
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import { ClientRegistrationForm } from './pages/ClientSignup';
import { SearchFreelancer } from './pages/SearchFreelancer';
import { FreelancerProfile } from './pages/FreelancerProfile';
import { FreelancerRegistrationForm } from './pages/FreelancerSignup';
import ClientPage from './pages/clientPage';
import ClientMain from './pages/ClientMain';
import OtpPage from './pages/OtpPage';



export const route = createBrowserRouter([
    {
     path: "/",
     element: <Main/>
    },
    {
     path: "/clientmain",
     element: <ClientMain/>
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

    path: "/OtpPage",
    element: <OtpPage/>
    }
   


   
   
   ]);