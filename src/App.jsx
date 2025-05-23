import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutUs from "./Pages/AboutUs"
import AllProducts from "./Pages/AllProducts"
import Home from "./Pages/Home"
import TopSelling from "./Pages/TopSelling"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AllProducts" element={<AllProducts/>}/>
        <Route path="TopSelling" element={<TopSelling/>}/>
        <Route path="AboutUs" element={<AboutUs/>}/>

      </Routes>
    </div>
  )
}

export default App
