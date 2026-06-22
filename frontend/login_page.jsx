import React, { useEffect, useState } from 'react'

function LikePage() {

  const [likedProducts, setLikedProducts] = useState([])

  useEffect(() => {

    const items =
      JSON.parse(localStorage.getItem("likedProducts")) || []

    setLikedProducts(items)

  }, [])

  return (

    <div className="p-10 mt-10">

      <h1 className="text-3xl font-bold text-blue-950 mb-10">
        My Wishlist ❤️
      </h1>

      {likedProducts.length === 0 ? (

        <h2 className="text-xl font-medium">
          No liked products found
        </h2>

      ) : (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {likedProducts.map((item) => (

            <div
              key={item.id}
              className="bg-blue-950 rounded-2xl overflow-hidden shadow-lg"
            >

              <img
                src={`http://127.0.0.1:8000${item.image}`}
                alt=""
                className="h-60 w-full object-cover p-4"
              />

              <div className="p-4">

                <h2 className="text-white text-lg font-semibold">
                  {item.name}
                </h2>

                <p className="text-white text-xl font-bold">
                  ₹{item.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default LikePage