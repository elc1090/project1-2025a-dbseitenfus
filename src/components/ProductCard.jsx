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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

import Product1 from "@/resources/console-playstation-5-sony-slim-branco-2-jogos-1000038899_1710512868_m.webp"
import { Star } from 'lucide-react';


export default function ProductCard() {
  return (
    <Card className="w-[268px] h-[478px] p-0 border border-gray-100 shadow-none">
      <CardHeader className="p-0"> 
        <div className="flex flex-row-reverse items-center pt-3 pr-2"> 
          <p className="text-[10px] text-text-weak ml-1">(7)</p>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star fill="currentColor" key={index} size={12} className="text-orange-weak ml-[3]" />
          ))}
        </div>
    </CardHeader>
      <CardContent className="p-2">
        <div className="flex flex-col items-center">
        <Image
        src={Product1}
        />
        </div>
        

        <span className="text-text font-semibold line-clamp-3 text-[14px]">Console PlayStation 5 Slim Sony, SSD 1TB, Com Controle Sem Fio DualSense, Branco + 2 Jogos - 1000038899</span>
        <span className="text-[12px]"><s>R$ 4.499,90</s></span><br></br>  
        <div className="flex items-center">
            <span className="text-[20px] text-orange-weak mr-2"><strong>R$ 3.719,07</strong></span>
            <div className="bg-orange-weak text-white font-bold px-1 py-0 h-[20px] rounded-full text-[10px] leading-none flex items-center">-10%</div>
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
