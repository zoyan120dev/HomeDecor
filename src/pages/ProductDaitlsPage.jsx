import React from 'react'
import { useParams } from 'react-router'
import useProducts from '../Hooks/useProducts';

function ProductDaitlsPage() {
    const {id} = useParams();
    const {products} = useProducts();
    console.log(products)
  return (
    <div>ProductDaitlsPage</div>
  )
}

export default ProductDaitlsPage;