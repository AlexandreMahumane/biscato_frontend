import { RouterProvider } from 'react-router-dom';
import { route } from './pages/roter'; 

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;


