import { createBrowserRouter } from "react-router-dom";
import { Client } from "./client";
import { Main } from "./main";
import SearchBar from "./SearchFreelancer";
import FreelancerProfile from "./FreelancerProfile";


export const route = createBrowserRouter([
    {
     path: "/",
     element: <Main/>
    },
    {
     path: "/client",
     element: <Client/>
    },
    {
    path: "/seach",
     element: <SearchBar/>
    },
    {
    path: "/freelancerProfile",
    element: <FreelancerProfile/>
    },

   
   
   ]);
   