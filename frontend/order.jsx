import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function OrderPage() {

  const { state } = useLocation()

  const navigate = useNavigate()

  const product = state?.product

  const [quantity, setQuantity] = useState(1)

  const [delivery, setDelivery] = useState(50)

  const [fullName, setFullName] = useState("")

  const [phone, setPhone] = useState("")

  const [address, setAddress] = useState("")

  const [paymentMethod, setPaymentMethod] = useState("Card")

  const total =
    Number(product.product_price) * quantity + delivery


  // ORDER API

  const handleOrder = async () => {

    try {

      const user_id = localStorage.getItem("user_id")

      const response = await fetch(
        "http://127.0.0.1:8000/create_order/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            user_id: user_id,

            product_id: product.product,

            quantity: quantity,

            full_name: fullName,

            phone: phone,

            address: address,

            payment_method: paymentMethod,

            delivery_charge: delivery

          }),
        }
      )

      const data = await response.json()

      console.log(data)

      if (response.ok) {

        // SUCCESS ALERT

        alert("Order Placed Successfully ✅")

        // GO TO CART PAGE

        navigate("/cart")

      } else {

        alert(data.error)

      }

    } catch (error) {

      console.log(error)

    }
  }

  return (

    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto space-y-8">

        {/* PRODUCT BOX */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h1 className="text-2xl font-bold mb-6">
            Product Details
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-center">

            <img
              src={`http://127.0.0.1:8000${product.product_image}`}
              alt=""
              className="w-52 h-52 object-cover rounded-2xl"
            />

            <div className="flex-1">

              <h2 className="text-3xl font-bold">
                {product.product_name}
              </h2>

              <p className="text-2xl text-green-600 font-semibold mt-3">
                ₹{product.product_price}
              </p>

              {/* QUANTITY */}

              <div className="mt-5">

                <label className="font-semibold">
                  Quantity
                </label>

                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) =>
                    setQuantity(Number(e.target.value))
                  }
                  className="border-2 border-gray-300 rounded-xl px-4 py-2 ml-4 w-24"
                />

              </div>

              {/* TOTAL */}

              <div className="mt-5 text-xl font-bold text-purple-700">

                Total : ₹{total}

              </div>

            </div>

          </div>

        </div>

        {/* USER DETAILS */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h1 className="text-2xl font-bold mb-6">
            User Details
          </h1>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              className="border-2 border-gray-300 rounded-xl p-3 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="border-2 border-gray-300 rounded-xl p-3 outline-none"
            />

            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              className="border-2 border-gray-300 rounded-xl p-3 outline-none md:col-span-2 h-32"
            />

          </div>

        </div>

        {/* DELIVERY */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h1 className="text-2xl font-bold mb-6">
            Delivery Distance
          </h1>

          <select
            value={delivery}
            onChange={(e) =>
              setDelivery(Number(e.target.value))
            }
            className="border-2 border-gray-300 rounded-xl p-3 w-full"
          >

            <option value={50}>
              Within 5 KM - ₹50
            </option>

            <option value={100}>
              Within 10 KM - ₹100
            </option>

            <option value={150}>
              Within 20 KM - ₹150
            </option>

          </select>

        </div>

        {/* PAYMENT */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h1 className="text-2xl font-bold mb-6">
            Payment Details
          </h1>

          <div className="space-y-4">

            <select
              value={paymentMethod}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
              className="border-2 border-gray-300 rounded-xl p-3 w-full outline-none"
            >

              <option value="Card">
                Card Payment
              </option>

              <option value="UPI">
                UPI Payment
              </option>

              <option value="Cash On Delivery">
                Cash On Delivery
              </option>

            </select>

            <input
              type="text"
              placeholder="Card Holder Name"
              className="border-2 border-gray-300 rounded-xl p-3 w-full outline-none"
            />

            <input
              type="text"
              placeholder="Card Number"
              className="border-2 border-gray-300 rounded-xl p-3 w-full outline-none"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="MM/YY"
                className="border-2 border-gray-300 rounded-xl p-3 outline-none"
              />

              <input
                type="password"
                placeholder="CVV"
                className="border-2 border-gray-300 rounded-xl p-3 outline-none"
              />

            </div>

          </div>

        </div>

        {/* FINAL BUTTON */}

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-bold"
        >

          Confirm Order ₹{total}

        </button>

      </div>

    </div>

  )
}

export default OrderPage