import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import elect from "../assets/elect.jpg"
import img6 from "../assets/img6.jpg"
import images from "../assets/images.jpg"
import kids from "../assets/kids.jpg"
import phone from "../assets/phone.jpg"
import home from "../assets/home.jpg"
import fur from "../assets/fur.jpg"
import foot from "../assets/foot.jpg"
import product from "../assets/product.jpg"
import books from "../assets/books.jpg"

import { ShoppingCartIcon } from "lucide-react"

function Category({ setSelectedCategory }) {

  const imageList = [
    { id: 1, img: elect },
    { id: 2, img: img6 },
    { id: 3, img: images },
    { id: 4, img: kids },
    { id: 5, img: phone },
    { id: 6, img: home },
    { id: 7, img: fur },
    { id: 8, img: foot },
    { id: 9, img: product },
    { id: 10, img: books }
  ]

  return (

    <div className="flex flex-col items-center w-full mt-10">

      <div className="flex items-center gap-2">

        <h1 className="text-3xl font-medium text-blue-900">
          Start Shopping by Category...
        </h1>

        <ShoppingCartIcon className="h-8 w-8 text-blue-900" />

      </div>

      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-5xl mt-10"
      >

        <CarouselContent className="-ml-2">

          {imageList.map((item) => (

            <CarouselItem
              key={item.id}
              className="pl-2 basis-1/4 lg:basis-1/6 flex justify-center"
            >

              <div
                className="h-28 w-28 rounded-full overflow-hidden border-2 border-blue-900 cursor-pointer"
                onClick={() => setSelectedCategory(item.id)}
              >

                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover"
                />

              </div>

            </CarouselItem>

          ))}

        </CarouselContent>

        <CarouselPrevious className="bg-gray-600 text-white h-8 w-8" />

        <CarouselNext className="bg-gray-600 text-white h-8 w-8" />

      </Carousel>

    </div>

  )
}

export default Category