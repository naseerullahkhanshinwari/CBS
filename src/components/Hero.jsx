import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const [pickupLocation, setpickupLocation] = useState('')
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-5 bg-light text-center'>
      <h1 className='text-4xl md:text-5xl font-semibold'>خوش آمدید</h1>
      <h1 className='text-4xl md:text-5xl font-semibold'>اپنے گاڈی کا نتخاب کریں اور سفر سے مزے لیں</h1>
     <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-4xl bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
  <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 w-full'>
    {/* Pickup Location */}
    <div className='w-full md:w-auto'>
      <select 
        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        required
        value={pickupLocation} onChange={(e)=>setpickupLocation(e.target.value)}
      >
        <option value="">Pickup Location</option>
        {cityList.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>
      <p className='px-1 text-sm text-gray-500 mt-1'> {pickupLocation ? pickupLocation : '>اپنی جگہ کا انتخاب کریں'}</p>
    </div>
    <div className='w-full md:w-auto'>
     <label htmlFor="pickup-date">Pickup Date</label>
     <input type="date" id='pickup-date' cmin={new Date().toISOString().split('T')[0]} className='text-sm text-grey-500' required/>
    </div>
    <div className='w-full md:w-auto'>
     <label htmlFor="return-date">Return Date</label>
     <input type="date" id='return-date' className='text-sm text-grey-500' required/>
    </div>
        <button className='flex item items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:transparent text-white rounded-full'>
          <img src={assets.search_icon} alt="search icon" />
          Search
        </button>
    
  </div>
</form>
      <img src={assets.main_car}alt="car" className='w-150 h-auto'/>
    </div>

  )
}

export default Hero