import { createBrowserRouter } from "react-router-dom";

// import { Main } from "./pages/main";
// import {SearchFreelancer} from "./pages/SearchFreelancer";
// import {FreelancerProfile} from "./pages/FreelancerProfile";
import { FreelancerRegistrationForm } from "./pages/FreelancerSignup";
import { ClientRegistrationForm } from "./pages/ClientSignup";
import { SearchFreelancer } from "./pages/SearchFreelancer";
import { FreelancerProfile } from "./pages/FreelancerProfile";
import Main from "./pages/main";
import ClientMain from "./pages/ClientMain";


export const route = createBrowserRouter([
    {
     path: "/",
     element: <Main/>
    },
    {
     path: "/signup/client",
     element: <ClientRegistrationForm/>
    },
    {
     path: "/client",
     element: <ClientMain/>
    },
    {
     path: "/signup/freelancer",
     element: <FreelancerRegistrationForm/>
    },
    {
    path: "/SearchFreelancer",
     element: <SearchFreelancer/>
    },
    {
    path: "/freelancerProfile",
    element: <FreelancerProfile/>
    },

   
   
   ]);
   