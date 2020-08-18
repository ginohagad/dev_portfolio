import React from 'react';
import devices from '../../images/devices.png';

export default function Hero() {
  return (
    <div className="bg-gray-100 flex p-20">
      <img className="flex-1 w-20 p-10" src={devices} alt="Devices" />
      <h2 className="flex-1 text-xl p-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos expedita quasi similique assumenda minus.</h2>
    </div>
  )
}