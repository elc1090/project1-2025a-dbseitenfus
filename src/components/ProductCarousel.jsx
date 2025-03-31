import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import ProductCard from "@/components/ProductCard"

export default function ProductCarousel({title, icon: Icon}) {
  return (
    <div className="w-9/10 mt-5">

        {title && (
            <div className="flex items-center gap-2 mb-4 ml-5 mt-7">
            {Icon && <Icon className="w-6 h-6 text-orange-weak" fill="currentColor" />} {/* Renderiza o ícone se for passado */}
            <h2 className="text-xl font-bold">{title}</h2>
            </div>
        )}

        <Carousel
        opts={{
            align: "start",
        }}
        className="w-full"
        >
        <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[275px]">
                <div className="p-3">
                <ProductCard>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                </ProductCard>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  )
}
