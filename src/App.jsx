import { useState } from 'react'

import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './Layout/RootLayout'
import Homepage from './Pages/Homepage';
import WishList from './Pages/WishList';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile'

import './App.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/profile' element={<Profile/>} />
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
