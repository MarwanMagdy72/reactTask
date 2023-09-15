import React from 'react'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import NotFound from './Components/NotFound/NotFound';
import Portfolio from './Components/Portfolio/Portfolio';

export default function App() {
  const routes = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<About></About>},
      {path:'about',element:<About></About>},
      {path:'portfolio',element:<Portfolio></Portfolio>},
      {path:'contact',element:<Contact></Contact>},
      {path:'*', element:<NotFound></NotFound>}
    ]}
  ])

  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}
