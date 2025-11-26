import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Login from './login.jsx'
import NotFound from './notFound.jsx';
import Counter from './counter.jsx';
import Post from './posts.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <NotFound/>
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path : '/count',
    element : <Counter/>
  },
  {
    path : '/posts/:id',
    element : <Post/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

  </StrictMode>
)
