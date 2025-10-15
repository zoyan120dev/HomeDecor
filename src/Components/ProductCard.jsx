import React from "react";
import { Link } from "react-router";

function ProductCard({ product }) {
  const {
    name,
    category,
    price,
    material,
    dimensional,
    stock,
    image,
    description,
    id
  } = product;
  return (
    <>
      <div className="card bg-base-100  shadow-sm border">
        <figure>
          <img className="h-48 overflow-hidden w-full object-cover hover:scale-105 transition-all ease-in-out"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
             Cetagory: {category}
          </p>

          <p>
            Price: ${price}
          </p>
          <div className="card-actions justify-end">
            <Link  to={`/product/${id}`} className="btn btn-outline">View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
