import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from "./components/about/About";
import Services from "./components/services/Services";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";

import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Regist from "./components/akash/Regist";
import PropertyList from "./components/propertyList/PropertyList";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/All-rounder" element={<PropertyList/>}/> */}
        <Route exact path="/About-us" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/register-as-employee" element={<Regist/>}/>
        <Route exact path="/Pricing" element={<Pricing/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
