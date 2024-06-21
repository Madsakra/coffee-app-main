import { useState } from 'react'

import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './Layout/RootLayout'
import Homepage from './Pages/Homepage';



import './App.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Homepage/>}/>

      </Route>
    )
  )
  




  return (
    <>

    <div className="App">

      <RouterProvider router={router}/>    
      

    </div>

    </>
  )
}

export default App
