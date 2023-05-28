

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch('https://car-service-server-site.vercel.app/services')
         .then(res => res.json())
         .then(data => setServices(data))
   }, [])
   return (
      <div>
         <div className='text-center mb-4'>
            <p className="text-2xl mb-4 font-bold text-orange-600">Services</p>
            <h2 className="text-5xl font-semibold mb-4">Our Service Area</h2>
            <p className='mb-8'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
         </div>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               services.map(service => <ServiceCard
                  key={service._id}
                  service={service}
               ></ServiceCard>)
            }
         </div>
      </div>
   );
};

export default Services;