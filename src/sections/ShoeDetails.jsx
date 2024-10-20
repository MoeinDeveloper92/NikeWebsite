import React from 'react'
import { useParams } from 'react-router-dom'
const ShoeDetails = () => {
    const { shoeName } = useParams()
    console.log(shoeName)
    return (
        <div>ShoeDetails</div>
    )
}

export default ShoeDetails