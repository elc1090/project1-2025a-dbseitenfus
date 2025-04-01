import ProductCarousel from "@/components/ProductCarousel"
import { Button } from "./ui/button"
import Image from "next/image"

import PromotionBanner1 from "@/resources/promotion-banner1.webp"
import PromotionBanner2 from "@/resources/promotion-banner2.webp"

import { Star, Clock } from "lucide-react"
import ViewAllButton from "./ViewAllButton"


export default function HomeProductsSection() {
    return (
        <div className="flex flex-col w-full"> {/* Ajustado a altura mínima */}
            <div className="bg-main-campain flex justify-between items-center w-full h-[66px] pr-[32px] pl-[32px] font-bold">
                <h2 className="text-white text-[20px]">FESTIVAL DE OFERTAS</h2>
                <h2 className="text-white text-[20px] flex items-center">
                    TERMINA EM: 
                    <Clock className="w-5 h-5 ml-2" />
                    <span className="ml-2">05:40:35</span>
                </h2>
            </div>

            <div className="bg-white-mid flex flex-col justify-center items-center w-full ">
                <ProductCarousel />
                <div className="flex justify-end w-full mt-[20px]">
                    <ViewAllButton /> 
                </div>
            </div>

            <div className="flex">
                <Image src={PromotionBanner1} alt="Promoção 1" className="w-full h-auto mt-[40px] mr-5" />
                <Image src={PromotionBanner2} alt="Promoção 2" className="w-full h-auto mt-[40px]" />
            </div>

            <div className="bg-white-mid flex flex-col justify-center items-center w-full ">
                <ProductCarousel title="OFERTA DO NINJA" icon={Star}/>
                <div className="flex justify-end w-full mt-[20px]">
                    <ViewAllButton /> 
                </div>
            </div>
            
        </div>
    )
}