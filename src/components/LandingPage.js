// src/components/LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';

const loadTypes = [
  { id: 1, name: 'Heavy Machinery', details: 'Used for lifting very heavy equipment or structures',load:'100kg',price:'1000rs',power:'1000hp', image: '/images/crane1.jpg' },
  { id: 2, name: 'Construction Materials', details: 'Ideal for moving large quantities of building materials.',load:'200kg',price:'2000rs',power:'2000hp', image: '/images/constructions.jpg' },
  { id: 3, name: 'Containers', details: 'Specialized for handling shipping containers.',load:'300kg',price:'3000rs',power:'3000hp', image: '/images/crane1.jpg' },
  { id: 4, name: 'Vehicles', details: 'Capable of lifting and transporting vehicles.',load:'400kg',price:'4000rs',power:'4000hp', image: '/images/crane5.jpg' },
  { id: 5, name: 'Bulk Goods', details: 'Designed for bulk cargo like grain, coal, etc.',load:'500kg',price:'5000rs',power:'5000hp', image: '/images/crane4.jpg' },
  { id: 6, name: 'Specialized Equipment', details: 'For lifting specific, custom-designed equipment.',load:'600kg',price:'6000rs',power:'6000hp', image: '/images/crane5.jpg' },
  { id: 7, name: 'Fragile Items', details: 'Handles delicate items with extra care.',load:'700kg',price:'7000rs',power:'7000hp', image: '/images/crane2.jpg' },
  { id: 8, name: 'Oversized Loads', details: 'Capable of managing oversized and heavy loads.',load:'800kg',price:'8000rs',power:'8000hp', image: '/images/crane1.jpg' },
  { id: 9, name: 'Oversized Loads', details: 'Capable of managing oversized and heavy loads.',load:'800kg',price:'8000rs',power:'8000hp', image: '/images/crane12.jpg' },

];
const loadTypeImage = loadTypes[0].image;
const LandingPage = () => {
  const [selectedLoad, setSelectedLoad] = useState(null);

  const handleSelect = (load) => {
    setSelectedLoad(load);
  };
  const loadItems = [];
  for (let i = 0; i < 3; i++) {
    loadItems.push(
      <div className="product" key={loadTypes[i].id}>
        <img src={loadTypes[i].image} alt={loadTypes[i].name} />
        <p><h2>Rent starts from <a href="#"><i>{loadTypes[i].price}</i></a>/day</h2></p>
        <p><h4>Details: {loadTypes[i].details}</h4></p>
        <p><h4>Load-capacity: {loadTypes[i].load}</h4></p>
        <p><h4>Power: {loadTypes[i].power}</h4></p>
      </div>
    );
  }

  const loadItems1 = [];
  for (let i = 3; i < 6; i++) {
    loadItems1.push(
      <div className="product" key={loadTypes[i].id}>
        <img src={loadTypes[i].image} alt={loadTypes[i].name} />
        <p><h2>Rent starts from <a href="#"><i>{loadTypes[i].price}</i></a>/day</h2></p>
        <p><h4>Details: {loadTypes[i].details}</h4></p>
        <p><h4>Load-capacity: {loadTypes[i].load}</h4></p>
        <p><h4>Power: {loadTypes[i].power}</h4></p>
      </div>
    );
  }


  return (
    



    <div className="am"  >
        <p className="heading">Mobi Lift</p>
     
        <div>
    
        <nav className="nav-links">
        <a href="#about-us">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>
      </nav>
    </div>
   
        <div className="imagealign">
          <p >   <i> Rent top <span ><span > quality</span><br></br></span> equipments across India</i> <br></br>
          
          <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
       
      />
      
    </div>
          
          </p>
          <br></br>
       
          <img  src="/images/construction-site-building.jpg" alt={loadTypes[6].name} width="40%"  height="30%" />
         </div>
         
         <h3 center>Commonly Leased Equipments</h3>
         <div  className='selectalign'>
        <select>
           <option value="all">View All</option>
           <option value="wheel-loaders">Wheel Loaders</option>
           <option value="scissor-lifts">Scissor Lifts</option>
           <option value="boom-lifts">Boom Lifts</option>
           <option value="excavators">Excavators</option>
           <option value="backhoes">Backhoes</option>
           <option value="mini-excavators">Mini Excavators</option>
           <option value="forklifts">Forklifts</option>
       </select>
       </div>
       
         <div class="product-grid">
       
       {loadItems}
   </div>
   <div class="filter">
  
         <div class="product-grid">
       
    
    </div>
    
   </div>
   
   <h3>Most wanted machinery</h3>
   
   <div  className='selectalign'>
        <select>
           <option value="all">View All</option>
           <option value="wheel-loaders">Wheel Loaders</option>
           <option value="scissor-lifts">Scissor Lifts</option>
           <option value="boom-lifts">Boom Lifts</option>
           <option value="excavators">Excavators</option>
           <option value="backhoes">Backhoes</option>
           <option value="mini-excavators">Mini Excavators</option>
           <option value="forklifts">Forklifts</option>
       </select>
       </div>
    <div class="product-grid">
       
       {loadItems1}
    </div>
      
   </div>
   




    
  );
};

export default LandingPage;
