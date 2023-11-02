import './App.css';
import Main from './main'
import {createBrowserRouter, RouterProvider} from "react-router-dom";





function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Main/>,

  }

  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
