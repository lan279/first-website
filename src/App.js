import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './home'
import About from './about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path: "/about",
    element: <About />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
