import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
const SpecialOffer = () => {
    return (
        <section className='max-container flex flex-wrap items-center max-xl:flex-col-reverse gap-10 '>
            <div className='flex-1 flex'>
                <img src={offer} alt="" width={773} height={687} className='object-contain w-full max-sm:self-center' />
            </div>
            <div className="flex flex-1 flex-col">

                <h2 className='font-bold font-palanquin text-4xl capitalize max-sm:text-[72px] sm:leading-[82px] lg:max-w-lg'>
                    We Provide You
                    <span className='text-coral-red'> Special</span>
                    <span className='text-coral-red'> Offer</span>
                    {" "}
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>
                <p className='mt-6 lg:max-w-lg info-text'>
                    Our dedication to the customeers is somethign proven.
                </p>
                <div className='mt-11'>
                    <Button
                        label="View Details"
                    />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer