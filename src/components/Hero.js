import React from 'react'
import devices from '../images/devices.png'

export default function Hero() {
  return (
    <div className="py-20">
      <img className="h-64 mx-auto" src={devices} alt="Devices" />
    </div>
  )
}
