import React from 'react';
import "./Services.css";
import Navbar from '../navbar/Navbar';
import { Link } from "react-router-dom";
function Services() {
  return (
    <div>
       {/* <<div className="button2"><button><Link to="/">prev</Link></button></div>
      <link> */}
      <Navbar/>
      

    <div class="container">
      <h1>Our Services</h1>
      <div class="row">
        <div class="service maid">
          <img src="https://www.pngall.com/wp-content/uploads/8/Architect-Worker-PNG-Picture-180x180.png" alt="" />
          <h2>Domestic</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class="service maid">
         <img src={require('./maid.png')} alt="lskfdlsdf" />
          <h2>Maid</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div class="service maid">
          <img src={require('./allrounder.png')}alt="" />
          <h2>Allrounder</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        
        <div class="service maid">
          <img src={require('./worker.png')}alt="" />
          <h2></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        
      </div>
    </div>
  
    </div>
  )
}

export default Services
