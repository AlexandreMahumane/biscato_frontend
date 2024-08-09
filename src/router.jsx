
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import { ClientRegistrationForm } from './pages/ClientSignup';
import { FreelancerRegistrationForm } from './pages/FreelancerSignup';
import ClientMain from './pages/ClientMain';
import OtpPage from './pages/OtpPage';
import LocationPage from './pages/LocationPage';
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
    {

    path: "/LocationPage",
    element: <LocationPage/>
    },
    {

    path: "/OtpPage",
    element: <OtpPage/>
    }
   


   
   
   ]);