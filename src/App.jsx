import { RouterProvider } from 'react-router-dom';
import { route } from './pages/roter'; 

import Client from "./pages/client"
import { Main } from "./pages/main"
function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;


