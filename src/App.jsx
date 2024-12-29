import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Homepage from './Components/Home/Homepage'
import Navbar from './Components/Navbar/Navbar'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

function App () {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
