import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'
const Cars = () => {
  const [input, setInput] = useState('')
  return (
    <div>
      <div className='flex flex-col items-center py-20 bg-light max-md:ox-4'>
        <Title title='Available Cars' subtitle='ہمارے ساتھ مندرجہ ذیل گاڑیاں دستیاب ہیں' />

        <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 shadow border border-borderColor'>
          <img src={assets.search_icon} alt="searchicon" className='w-4.5 h-4.5 mr-2' />
          <input onClick={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Search a Car by Name, Model or Features" className='w-full h-full outline-none text-black' />
          <img src={assets.filter_icon} alt="filtericon" className='w-4.5 h-4.5 ml-2' />

        </div>
      </div>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
        <p className='text-black xl:px-20 max-w-7xl mx-auto'>Showing{dummyCarData.length} Cars</p>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>{dummyCarData.map((car, index)=> (
          <div key={index}>
              <CarCard car={car} />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Cars
