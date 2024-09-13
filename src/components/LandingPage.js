// src/components/LandingPage.js
import React, { useState } from 'react';
import './log.css';
import Navbar from './nav';
const loadTypes = [
  { id: 1, name: 'Heavy Machinery', details: 'Used for lifting very heavy equipment or structures',load:'100kg',price:'1000rs',power:'1000hp', image: '/images/crane1.jpg' },
  { id: 2, name: 'Boom Lifts:', details: 'Ideal for moving large quantities of building materials.',load:'200kg',price:'2000rs',power:'2000hp', image: '/images/crane2.jpg' },

  { id: 3, name: 'Telescopic Cranes:', details: 'Specialized for handling shipping containers.',load:'300kg',price:'3000rs',power:'3000hp', image: '/images/crane3.jpg' },
  { id: 4, name: 'Crane-Mounted Boom :', details: 'Capable of lifting and transporting vehicles.',load:'400kg',price:'4000rs',power:'4000hp', image: '/images/crane4.jpg' },
  { id: 5, name: 'Bulk Goods', details: 'Designed for bulk cargo like grain, coal, etc.',load:'500kg',price:'5000rs',power:'5000hp', image: '/images/crane5.jpg' },
  { id: 6, name: 'Specialized Equipment', details: 'For lifting specific, custom-designed equipment.',load:'600kg',price:'6000rs',power:'6000hp', image: '/images/crane6.jpg' },
  { id: 7, name: 'Fragile Items', details: 'Handles delicate items with extra care.',load:'700kg',price:'7000rs',power:'7000hp', image: '/images/crane2.jpg' },
  { id: 8, name: 'Oversized Loads', details: 'Capable of managing oversized and heavy loads.',load:'800kg',price:'8000rs',power:'8000hp', image: '/images/crane1.jpg' },
  { id: 9, name: 'Oversized Loads', details: 'Capable of managing oversized and heavy loads.',load:'800kg',price:'8000rs',power:'8000hp', image: '/images/crane12.jpg' },

];
const loadlocation = [
  { id: 1   , name: 'Pune',  image: '/images/pune.jpg' },
  { id: 2, name: 'Mumbai',  image: '/images/mumbai.jpg' },
  { id: 3, name: 'Ahemdabad', image: '/images/ahemdabad.jpg' },
  { id: 4  , name: 'shimla',  image: '/images/shimla.jpg' },
  { id: 5, name: 'srinagar',  image: '/images/srinagar.jpg' },
  { id: 6, name: 'delhi', image: '/images/delhi.jpg' }
 
];
const loadTypeImage = loadTypes[0].image;
const LandingPage = () => {
  const [selectedLoad, setSelectedLoad] = useState(null);

  const handleSelect = (load) => {
    setSelectedLoad(load);
  };


  const loadItems2 = [];
  for (let i = 1; i < 6; i++) {
    loadItems2.push(
      
       <p><a href='/request'><img src={loadTypes[i].image} alt={loadTypes[i].name} /></a>
        <h5>{loadTypes[i].name}</h5></p> 
    
  
     
    );
  }
  const loadlocationItems = [];
  for (let i = 0; i < 6; i++) {
    loadlocationItems.push(
      
       <p><img src={loadlocation[i].image}   /><h5>{loadlocation[i].name}</h5> </p> 

     
    );
  }

  return (

    <div className="am"  >
    
       <Navbar />
        <div className="imagealign">
          Rent top   quality  equipments across India <br></br>
          
          <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
       
      />
        <input
        className="search-input"
        type="date"
        placeholder=""
       
      />
        <input
        className="search-input"
        type="submit"
        placeholder="Submit"
       
      />
      
      </div>
      </div>
     
       <h2 >Popular Equipment</h2>
     
      <div className='imagegrid'>     
       {loadItems2}
      </div>
      <div style={{backgroundColor:'#f7f7f7',borderRadius:'8px'}}>
       <h2>  Popular Rental Locations </h2>  
       <p  style={{paddingLeft:'8%'}}>Rent equipment from over 1000+ rental partners across India.</p> 
       </div>
        <div className='imagegrid1'>
          {loadlocationItems}
        </div>
        <h2>Our Expertise:</h2>


        <div className='imagegrid2'>     
       <p><h4>Material Handling:</h4> Our experienced team and state-of-the-art equipment ensure seamless material movement and storage.</p>
       <p><h4>Infrastructure Erection:</h4> We specialize in constructing and assembling complex structures for various industries.</p>
       <p><h4>Heavy Equipment Services:</h4> Our fleet of boom lifts, man lifts, bucket cranes, and earthmoving machinery is available for rent or hire</p>
       <p><h4>Crane Support: </h4>We offer reliable Bucket / Basket Crane, Manlifts, Boomlifts, Hydra, Farana, Mobile Telescopic crane services to our esteemed clients.</p>
      </div>

      <h2>Why Choose Us:</h2>

      <div className='imagegrid2'>    

      <p><h4>Family-Owned Values: </h4>Our commitment to quality, reliability, and customer satisfaction is deeply rooted in our family's values.</p>
      <p><h4>Local Expertise: </h4>With years of experience serving various cities in Maharashtra like Pune, Pimpri-Chinchwad, Ahmednagar, Beed and Latur. We understand the unique needs and challenges of the region.
      </p>
       <p><h4>Advanced Equipment: </h4>Our fleet of modern equipment is well-maintained and regularly updated to deliver optimal performance.</p>
       <p><h4>Experienced Team: </h4>Our skilled professionals possess the expertise and knowledge to handle any project, big or small.</p>
       </div>
       </div>
       
       

  );
};

export default LandingPage;
