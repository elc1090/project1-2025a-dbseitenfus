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
    <Card className="w-[350px]">
      <CardHeader>

        <div className="flex flex-row-reverse items-center">
            <p className="text-[10px] ml-1">(7)</p>
            {Array.from({ length: 5 }).map((_, index) => (
                <Star fill="orange" key={index} size={12} className="text-orange-600 ml-[3]" /> 
            ))}

            
        </div>

        
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
        <Image
        src={Product1}
        />
        </div>
        

        <span><strong>Console PlayStation 5 Slim Sony, SSD 1TB, Com Controle Sem Fio DualSense, Branco + 2 Jogos - 1000038899</strong></span><br></br>
        <span className="text-[12px]"><s>R$ 4.499,90</s></span><br></br>  
        <div className="flex items-center">
            <span className="text-[20px] text-orange-600 mr-2"><strong>R$ 3.719,07</strong></span>
            <div className="bg-orange-600 text-white font-bold px-1 py-0 h-[20px] rounded-full text-[10px] leading-none flex items-center">-10%</div>
        </div>
        <div>
            À vista no PIX <br></br>
            <span>ou até <b>10x de R$183,33</b></span>
        </div>
      </CardContent>
      <CardFooter className="flex w-full">
        <Button className="w-full bg-orange-600">Comprar</Button>
      </CardFooter>
    </Card>
  )
}
