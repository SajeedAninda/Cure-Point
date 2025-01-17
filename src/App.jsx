import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Homepage from "./Homepage/Homepage"
import Navbar from "./Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    
    </>
  )
}

export default App
