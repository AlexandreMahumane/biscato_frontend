
import { RouterProvider } from "react-router-dom"
import Client from "./pages/client"
import { Main } from "./pages/main"
import { route } from "./pages/roter"

function App() {


  return (
    <>
<RouterProvider router={route}/>
      
    </>
  )
}

export default App
