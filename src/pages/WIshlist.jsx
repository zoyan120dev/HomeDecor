import React, { useEffect, useState } from "react";

function WIshlist() {
  const [wishList, setWishList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("wishlist"));
    if (saveList) setWishList(saveList);
  }, []);

  const SortedItems = (() => {
    if (sortOrder === "price-asc") {
      return [...wishList].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishList].sort((a, b) => b.price - a.price);
    } else {
      return wishList;
    }
  })();

  const handelRemove = id => {
    const existingList = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updateList = existingList.filter((p) => p.id !== id);
    // for Ui instent upDate
    setWishList(updateList)

    localStorage.setItem("wishlist", JSON.stringify(updateList));
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between py-5 items-center1">
          <h1 className="text-2xl font-bold mb-3">
            All Products{" "}
            <span className="text-sm text-gray-400 font-normal">
              ({wishList.length}) products Found
            </span>{" "}
          </h1>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort By Price</option>
              <option value="price-asc">Low-&gt; Heigh</option>
              <option value="price-desc">Heigh-&gt; Low</option>
            </select>
          </label>
        </div>
        <div className="space-y-3">
          {SortedItems.map((p) => (
            <div className="card card-side bg-base-100 shadow-sm">
              <figure>
                <img
                  className="h-[200px] w-[200px] object-cover"
                  src={p.image}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.name}</h2>
                <p>{p.category}</p>
              </div>

              <div className="flex items-center p-2 gap-2">
                <p className="font-bold">Price: ${p.price}</p>
                <button onClick={() => handelRemove(p.id)} className="btn bg-red-500 text-white">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WIshlist;


