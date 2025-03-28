"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import Banner1 from "@/resources/banner1.gif";
import Banner2 from "@/resources/banner2.webp";
import Banner3 from "@/resources/banner3.webp";
import Banner4 from "@/resources/banner4.webp";
import Banner5 from "@/resources/banner5.webp";
import Banner6 from "@/resources/banner6.webp";


  export default function HomeCarousel() {
    return (
        <Carousel
        className="w-full max-w-9/10 flex justify-center"
            plugins={[
                Autoplay({
                delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                <CarouselItem className="w-full flex justify-center">
                    <Image src={Banner1} />
                    </CarouselItem>
                <CarouselItem className="w-full flex justify-center">
                <Image src={Banner2} />
                </CarouselItem>
                <CarouselItem className="w-full flex justify-center"> 
                    <Image src={Banner3} />
                </CarouselItem>
                <CarouselItem className="w-full flex justify-center">
                    <Image src={Banner4} />
                </CarouselItem>
                <CarouselItem className="w-full flex justify-center">
                    <Image src={Banner5} />
                </CarouselItem>
                <CarouselItem className="w-full flex justify-center">
                    <Image src={Banner6} />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}