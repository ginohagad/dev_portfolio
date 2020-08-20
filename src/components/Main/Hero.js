import React from 'react';
import devices from '../../images/devices.png';

export default function Hero() {
  return (
    <div className="bg-gray-200 p-10 md:flex md:p-20">
      <img className="block md:flex-1 md:w-40 md:p-10" src={devices} alt="Devices" />
      <h2 className="block pt-10 md:flex-1 md:text-xl md:p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos expedita quasi similique assumenda minus.</h2>
    </div>
  )
}