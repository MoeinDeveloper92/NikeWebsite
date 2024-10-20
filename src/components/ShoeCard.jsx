import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL) {
            changeBigShoeImg(imgURL.bigShoe)
        }
    }
    return (
        <div onClick={handleClick} className={`border-2 roudned-xl ${bigShoeImg === imgURL.bigShoe ? "border-coral-red rounded-xl" : "border-transparent"} cursor-pointer max-sm:flex-1`}>
            <div className='flex justify-center items-center bg-card bg-center bg-cover w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={imgURL.thumbnail} alt="Shoe Collection" width={127} height={103} className='object-contain' />
            </div>
        </div>
    )
}

export default ShoeCard