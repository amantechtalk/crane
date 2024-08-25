// src/components/LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';

const loadTypes = [
  { id: 1, name: 'Heavy Machinery', details: 'Used for lifting very heavy equipment or structures',load:'100kg',price:'1000rs',power:'1000hp', image: '/images/crane1.jpg' },
  { id: 2, name: 'Construction Materials', details: 'Ideal for moving large quantities of building materials.',load:'200kg',price:'2000rs',power:'2000hp', image: '/images/constructions.jpg' },
  { id: 3, name: 'Containers', details: 'Specialized for handling shipping containers.',load:'300kg',price:'3000rs',power:'3000hp', image: '/images/crane1.jpg' },
  { id: 4, name: 'Vehicles', details: 'Capable of lifting and transporting vehicles.',load:'400kg',price:'4000rs',power:'4000hp', image: '/images/crane5.jpg' },
  { id: 5, name: 'Bulk Goods', details: 'Designed for bulk cargo like grain, coal, etc.',load:'500kg',price:'5000rs',power:'5000hp', image: '/images/crane4.jpg' },
  { id: 6, name: 'Specialized Equipment', details: 'For lifting specific, custom-designed equipment.',load:'600kg',price:'6000rs',power:'6000hp', image: '/images/crane3.jpg' },
  { id: 7, name: 'Fragile Items', details: 'Handles delicate items with extra care.',load:'700kg',price:'7000rs',power:'7000hp', image: '/images/crane2.jpg' },
  { id: 8, name: 'Oversized Loads', details: 'Capable of managing oversized and heavy loads.',load:'800kg',price:'8000rs',power:'8000hp', image: '/images/crane1.jpg' },
];

const LandingPage = () => {
  const [selectedLoad, setSelectedLoad] = useState(null);

  const handleSelect = (load) => {
    setSelectedLoad(load);
  };

  return (
    
    <div className="landing-page">
      <h1>Welcome to Crane Management</h1>
      <p>Select the type of load you need to manage:</p>
      <div className="load-types" >
        {loadTypes.map((load) => (
          <div key={load.id} className="load-card" onClick={() => handleSelect(load)}>
           
            
            <img src={load.image}  alt={load.name}  className="load-image" />
            <h3>{load.name}</h3>
            <h3>Load: {load.load}</h3>
            <h3>Price: {load.price}</h3>
            <h3>Power: {load.power}</h3>
            <p>{load.details}</p>
          </div>
        ))}
          {selectedLoad && (
        <div className="load-details">
          <h2>{selectedLoad.name}</h2>
          
          <img src={selectedLoad.image} alt={selectedLoad.name} className="load-image-detail" />
        </div>
      )}
      </div>

    
    </div>
    
  );
};

export default LandingPage;
