import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import "./home.css";
import Contact from "../../components/contact/Contact";
import { Link } from "react-router-dom";
import Pricing from "../../components/pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by work</h1>
        <PropertyList/>
        
        <h1 className="homeTitle">Domestic Services </h1>
        <FeaturedProperties/>
        
        
        <MailList/>
        
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
