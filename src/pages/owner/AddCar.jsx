import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {

  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    description: '',
  })

  const currency = import.meta.env.VITE_CURRENCY

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }
  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title="Add New Car" subtitle="نیچے دئیے گئے فارم کو صحیح طریقے سے پُر کریں" />
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
        {/*Car Image */}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 cursor-pointer rounded' />
            <input type="file" id='car-image' accept='image/*' hidden onChange={e => setImage(e.target.files[0])} />
          </label>
          <p className='text-xs'>Choose Car Image</p>
        </div>

        {/*Car Brand and Model */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type="text" placeholder='Toyota, Mercedes, Corrola, Vitz, VxR...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={e => setCar({ ...car, brand: e.target.value })} />
          </div>
          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type="text" placeholder='eg. 2000, 2004, 2005, 2020 ...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={e => setCar({ ...car, model: e.target.value })} />
          </div>

        </div>
        {/*Car Year, Price and Category */}
        <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type="number" placeholder='2025' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={e => setCar({ ...car, year: e.target.value })} />
          </div>
          <div className='flex flex-col w-full'>
            <label>Price in {currency}</label>
            <input type="number" placeholder='eg. 500' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.pricePerDay} />
          </div>
          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select onChange={e => setCar({ ...car, category: e.target.value })} value={car.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select Category</option>
              <option value="corrola-todee">Corrola Todee</option>
              <option value="vitz">Vitz</option>
              <option value="vxr">VXR</option>
              <option value="flying-coach">Flying Caoch</option>
              <option value="bus">Bus</option>
              <option value="alto">Alto</option>
            </select>
          </div>
        </div>
        {/*Transmission, Fuel Type and  */}
        <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <select onChange={e => setCar({ ...car, transmission: e.target.value })} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select Tranmission Type</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <select onChange={e => setCar({ ...car, fuel_type: e.target.value })} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select Fuel Type</option>
              <option value="CNG">CNG</option>
              <option value="diesel">Diesel</option>
              <option value="petrol">Petrol</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label>Seating Capacity</label>
            <input type="number" placeholder='eg. 1, 2 etc' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e => setCar({ ...car, seating_capacity: e.target.value })} />
          </div>
        </div>
        {/*Car Location */}
        <div className='flex flex-col w-full'>
          <label>Select Location</label>
            <select onChange={e => setCar({ ...car, location: e.target.value })} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a Location</option>
              <option value="torkham">Torkham</option>
              <option value="karkhano">Karkhano</option>
              <option value="haji-camp-ada">Haji Camp Ada</option>
              <option value="ring-road">Ring Road</option>
            </select>
        </div>
        {/*Car Discription */}
          <div className='flex flex-col w-full'>
            <label>Car Discription گاڈی کی وضاحت</label>
            <textarea rows={5} placeholder='Tell about your Car Engine and more features' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' onChange={e => setCar({ ...car, description: e.target.value })} value={car.description}> 
            </textarea>
          </div>

          <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
            <img src={assets.tick_icon} alt="" />
            List your Car
          </button>
      </form>
    </div>
  )
}

export default AddCar
