import { createBrowserRouter } from "react-router-dom";
import {  ClientRegistrationForm } from "./client";
import { Main } from "./main";
import {SearchFreelancer} from "./SearchFreelancer";
import {FreelancerProfile} from "../pages/FreelancerProfile";
import ClientPage from "./clientPage";


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
    {
    path: "/clientpage",
    element: <ClientPage/>
    },

   
   
   ]);
   