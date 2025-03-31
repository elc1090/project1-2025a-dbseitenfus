import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import { Star } from 'lucide-react';

export default function ProductCard( { product }) {

  return (
    <Card className="w-[268px] h-[478px] p-0 border border-gray-100 shadow-none">
      <CardHeader className="p-0"> 
        <div className="flex flex-row-reverse items-center pt-3 pr-2"> 
          <p className="text-[10px] text-text-weak ml-1">({product.rating})</p>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star fill="currentColor" key={index} size={12} className="text-orange-weak ml-[3]" />
          ))}
        </div>
    </CardHeader>
      <CardContent className="p-2">
        <div className="flex flex-col items-center">
        <Image
          src={product.src}
          className="w-auto object-contain"
          style={{ height: "162px", width: "auto" }}
          alt={product.title}
        />
        </div>
        

        <span className="text-text font-semibold line-clamp-3 text-[14px]">{product.title}</span>
        <span className="text-[12px]"><s>R$ {product.oldPrice}</s></span><br></br>  
        <div className="flex items-center">
            <span className="text-[20px] text-orange-weak mr-2"><strong>{product.price}</strong></span>
            <div className="bg-orange-weak text-white font-bold px-1 py-0 h-[20px] rounded-full text-[10px] leading-none flex items-center">-{product.discount}%</div>
        </div>
        <div className="text-text-weak text-[12px]">
            À vista no PIX <br></br>
            <span>ou até <b>10x de R$183,33</b></span>
        </div>
      </CardContent>
      <CardFooter className="flex w-full h-[38px] items-center pb-4 p-2">
        <Button className="w-full h-[38px] bg-orange-weak mb-12 font-bold">COMPRAR</Button>
      </CardFooter>
    </Card>
  )
}
