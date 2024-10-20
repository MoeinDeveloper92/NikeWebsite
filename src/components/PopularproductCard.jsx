import React from 'react'
import { star } from '../assets/icons'
import { Link } from 'react-router-dom'
const PopularproductCard = ({ imgURL, name, price }) => {

    const handlelink = (address) => {
        const codedURL = encodeURI(address)
        return `shoe/${codedURL}`
    }
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full max-sm:text-center'>
            <img src={imgURL} alt="SHOE IMAGE" className='w-[280px] h-[280px] max-sm:self-center' />
            <div className='mt-8 flex justify-start gap-2.5 max-sm:self-center'>
                <img src={star} alt="" width={24} height={24} />
                <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
            </div>
            <Link to={handlelink(name)} className=' cursor-pointer mt-2 text-2xl leading-normal font-semibold font-palanqui '>{name}</Link>
            <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
        </div>
    )
}

export default PopularproductCard