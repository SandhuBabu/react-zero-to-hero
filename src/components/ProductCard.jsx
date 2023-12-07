import React from 'react'

const ProductCard = ({product}) => {
    return (
        <div className='hover:shadow-md cursor-pointer bg-gray-100 p-[2em] rounded-md'>
            <img
                src={product?.image}
                alt=""
                className='h-[10em] mx-auto'
            />
            <h1 className='text-[18px] font-medium mt-4 text-center'>{product?.title}</h1>
            <p className='text-sm text-green-500 text-center'>Upto {product?.offer}% Off {}</p>
        </div>
    )
}

export default ProductCard