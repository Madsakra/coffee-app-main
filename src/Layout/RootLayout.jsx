import { Outlet } from "react-router-dom";
import MyNavbar from "../Components/Navbar";

import React from 'react'

export default function RootLayout() {
  return (
    <div>
      

        <Outlet/>


    </div>
  )
}
