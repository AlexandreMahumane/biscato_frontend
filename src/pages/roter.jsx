import { createBrowserRouter } from "react-router-dom";
import {  ClientRegistrationForm } from "./client";
import { Main } from "./main";
import {SearchFreelancer} from "./SearchFreelancer";
import {FreelancerProfile} from "./FreelancerProfile";


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
    path: "/SearchFreelancer",
     element: <SearchFreelancer/>
    },
    {
    path: "/freelancerProfile",
    element: <FreelancerProfile/>
    },

   
   
   ]);
   