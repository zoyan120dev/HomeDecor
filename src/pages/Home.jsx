import React from 'react'
import { Link, useLoaderData } from 'react-router'
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useProducts';

function Home() {
const {products , loading, setError} = useProducts();
 const featureProducts = products.slice(0 , 6)
  return (
    <div className=' container mx-auto mt-10'>
        <h1 className='text-2xl font-bold mb-3'>Featured Products</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
         {
            featureProducts.map(product => (
               <ProductCard key={product.id} product={product}/>
            ))
        }
       </div>
        
        <Link className='text-center mt-10 mb-9 mx-auto flex justify-center' to='/products'>
            <button className='cursor-pointer btn'>See All Products</button>
        </Link>
    </div>
  )
}

export default Home