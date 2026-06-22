import React, { useState } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import img8 from "../assets/img8.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

import Category from '../Components/Category'
import ProductPage from './ProductPage'

function Home() {

  const [selectedCategory, setSelectedCategory] = useState(1)

  const image = [
    {
      src: img8,
      quote: ['Quality products at', 'your fingertips']
    },
    {
      src: img3,
      quote: ['Quality you can trust', 'Best in every click']
    },
    {
      src: img4,
      quote: ['Fast delivery', 'Your happiness is our goal']
    }
  ]

  return (
    <div>

      {/* CAROUSEL */}

      <div className="flex justify-center mt-16">

        <Carousel className="w-full relative">

          <CarouselContent>

            {image.map((item, index) => (

              <CarouselItem key={index}>

                <div className='relative'>

                  <img
                    src={item.src}
                    alt=""
                    className='w-full h-130 object-cover'
                  />

                  <div className='absolute inset-0 bg-black/50'></div>

                  <div className='absolute inset-0 flex flex-col justify-center text-white ml-10'>

                    {item.quote.map((line, i) => (
                      <p key={i} className='text-3xl font-bold'>
                        {line}
                      </p>
                    ))}

                  </div>

                </div>

              </CarouselItem>

            ))}

          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white" />

          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white" />

        </Carousel>

      </div>

      {/* CATEGORY */}

      <Category setSelectedCategory={setSelectedCategory} />

      {/* PRODUCTS */}

      <ProductPage categoryId={selectedCategory} />

    </div>
  )
}

export default Home