import React from 'react'
import devices from '../images/devices.png'

export default function Hero() {
  return (
    <div className="bg-gray-100 py-20 flex">
      <img className="flex-auto h-64" src={devices} alt="Devices" />
      <h3 className="flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto, cum accusamus aperiam beatae porro in nobis cupiditate iste optio? Enim iusto error accusantium provident amet nesciunt dolorem, animi laboriosam!</h3>
    </div>
  )
}
