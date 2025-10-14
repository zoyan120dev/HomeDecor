import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";

function Products() {
  const { products } = useProducts();
  const [search , setSearch] = useState('')
  
  const term = search.trim().toLocaleLowerCase()

  const seaarchProducts = term ? products.filter(products => products.name.toLocaleLowerCase().includes(term)) : products;

  return (
    <>
      <div className=" container mx-auto mt-10">
        <div className="flex justify-between py-5 items-center1">
          <h1 className="text-2xl font-bold mb-3">All Products <span className="text-sm text-gray-400 font-normal">({seaarchProducts.length}) products Found</span> </h1>
         <label className="input">
          <input 
          value={search}
          onChange={(e) => setSearch(e.target.value)} type="search" name="" id="" placeholder="Search Product"/>
         </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {seaarchProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
