import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Testimonial = () => {
    return (
        <div className='py-28 px-6 md:px-16 lg:px-24 xl:px-44'>
            <Title title="What Our Customers Say" subtitle= "Discover why discerning traverlers chose Stayventure for their luxury accomodation around the world" />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt:-18">
                <div class="flex items-center -space-arround-5">
                    <div class="relative group flex flex-col items-center">
                        <p class="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-2 py-1 text-sm font-medium">Michael</p>
                        <img src={assets.testimonial_image_1} alt="image" className="w-20 h-20 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110"/>
                    </div>
                    <div class="relative group flex flex-col items-center">
                        <p class="opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 mb-3 px-2 py-1 text-sm font-medium">Michael</p>
                        <img src={assets.testimonial_image_2} alt="image" className="w-20 h-20 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110"/>
                    </div>
                </div>
                </div>
            </div>
            )
}

            export default Testimonial
