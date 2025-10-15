import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import useProducts from '../Hooks/useProducts'

function ProductDaitlsPage() {
  const { id } = useParams()
  const { products, loading, error } = useProducts()
  const product = products.find(p => String(p.id) === id)
  if (loading) return <p>Loading...</p>

  const {
    name,
    category,
    price,
    material,
    dimensional,
    stock,
    image,
    description,
  } = product

  const handelAddToWishList = () => {
    const existingList = JSON.parse(localStorage.getItem('wishlist')) || []
    const isDuplicate = existingList.some(p => p.id === product.id)
    if (isDuplicate) return alert('Already added item')

    const updateList = [...existingList, product]
    localStorage.setItem('wishlist', JSON.stringify(updateList))
    alert('Added to wishlist!')
  }
  

  return (
    <>
      <div className='container mx-auto flex justify-between m-8 gap-4 flex-col md:flex-row'>
        <div className='card bg-base-100 md:min-w-[50%] shadow border border-gray-400'>
          <figure>
            <img
              className='h-48 overflow-hidden w-full object-cover hover:scale-105 transition-all ease-in-out'
              src={image}
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <p>Cetagory: {category}</p>
            <p>Price: ${price}</p>
            <div className='card-actions justify-end'>
              <button
                onClick={handelAddToWishList}
                className='btn btn-outline'
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        <div className='md:w-[50%]'>
          <h1 className='font-bold text-3xl'>{name}</h1>
          <p className='text-xl text-gray-500'>{material}</p>
          <p className='text-gray-500 text-lg font-semibold'>Stock: {stock}</p>
          <p className='text-lg text-gray-600'>Dimensinoal: {dimensional}</p>
          <span className='text-xl text-gray-600 font-bold'>
            {description}
          </span>
        </div>
      </div>
    </>
  )
}

export default ProductDaitlsPage
