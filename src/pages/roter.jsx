import { createBrowserRouter } from "react-router-dom";
import { Client } from "./client";
import { Main } from "./main";


export const route = createBrowserRouter([
    {
     path: "/",
     element: <Main/>
    },
    {
     path: "/client",
     element: <Client/>
    },
    // {
    //  path: "/encontrar-trabalho",
    //  element: <En/>
    // },
    // {
    //  path: "/client",
    //  element: <Client/>
    // },

   
   
   ]);
   