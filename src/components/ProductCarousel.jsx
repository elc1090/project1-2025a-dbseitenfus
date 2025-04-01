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

  const products = [
    {
      id: 0,
      title: "Console PlayStation 5 Slim Sony, SSD 1TB, Com Controle Sem Fio DualSense, Branco + 2 Jogos - 1000038899",
      price: "R$ 4.679,10",
      oldPrice: "R$ 3.719,07",
      discount: 6,
      src: require("@/resources/products/console-playstation-5-sony-slim-branco-2-jogos-1000038899_1710512868_m.webp"),
      rating: 617,},
    {
      id: 1,
      title: "Apple iPhone 15 128GB, Quadriband, 6,1'', Câmera Dupla 48MP, Preto - Mtp03br/a",
      price: "R$ 4.679,10",
      oldPrice: "R$ 5.199,00",
      discount: 1,
      src: require("@/resources/products/Celular-Apple-Iphone-15-128GB-Br-Mtp03br-a-Preto-Quadriband_1730143983_g.webp"),
      rating: 11,},
    {
      id: 2,
      title: "Monitor Gamer Curvo LG UltraGear LG 34'', UltraWide, 160Hz, WQHD, 1ms, DisplayPort e HDMI, AMD FreeSync Premium, HDR10, 99% sRGB - 34GP63A-B",
      price: "R$ 3.111,10",
      oldPrice: "R$ 2.299,99",
      discount: 17,
      src: require("@/resources/products/monitor-gamer-lg-ultragear-lg-34-curvo-led-wqhd-ultrawide-160hz-1ms-displayport-e-hdmi-amd-freesync-premium-hdr10-99-srgb-34gp63a-b_1717591886_m.webp"),
      rating: 500,},
    {
      id: 3,
      title: "Notebook Samsung Galaxy Book4 Intel Core i5-1335U, 8GB RAM, SSD 512GB, 15,6'' Full HD, Iris Xe Graphics, Win 11H, Grafite - NP750XGJ-KG3BR",
      price: "R$ 4.444,44",
      oldPrice: "R$ 3.399,99",
      discount: 15,
      src: require("@/resources/products/notebook-samsung-galaxy-book4-intel-core-i5-1335u-8gb-ram-ssd-512gb-15-6-full-hd-iris-xe-graphics-win-11h-grafite-np750xgj-kg3br_1720107551_g.webp"),
      rating: 7,},
    {
      id: 4,
      title: "Processador AMD Ryzen 7 5700X3D, 3.0 GHz, (4.1GHz Max Turbo), Cache 4MB, 8 Núcleos, 16 Threads, AM4 - 100-100001503WOF",
      price: "R$ 2.298,88",
      oldPrice: "R$ 1.649,99",
      src: require("@/resources/products/processador-amd-ryzen-7-5700x3d-3-6-ghz-4-1ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-video-integrado-100-100001503wof_1708023990_g.webp"),
      rating: 656,},
    {
      id: 5,
      title: "Console PlayStation 5 Slim Sony, SSD 1TB, Com Controle Sem Fio DualSense, Branco + 2 Jogos - 1000038899",
      price: "R$ 3.719,07",
      oldPrice: "R$ 3.719,07",
      src: require("@/resources/products/console-playstation-5-sony-slim-branco-2-jogos-1000038899_1710512868_m.webp"),
      rating: 7,},
      {
        id: 0,
        title: "Console PlayStation 5 Slim Sony, SSD 1TB, Com Controle Sem Fio DualSense, Branco + 2 Jogos - 1000038899",
        price: "R$ 4.679,10",
        oldPrice: "R$ 3.719,07",
        discount: 6,
        src: require("@/resources/products/console-playstation-5-sony-slim-branco-2-jogos-1000038899_1710512868_m.webp"),
        rating: 617,},
      {
        id: 1,
        title: "Apple iPhone 15 128GB, Quadriband, 6,1'', Câmera Dupla 48MP, Preto - Mtp03br/a",
        price: "R$ 4.679,10",
        oldPrice: "R$ 5.199,00",
        discount: 1,
        src: require("@/resources/products/Celular-Apple-Iphone-15-128GB-Br-Mtp03br-a-Preto-Quadriband_1730143983_g.webp"),
        rating: 11,},
      {
        id: 2,
        title: "Monitor Gamer Curvo LG UltraGear LG 34'', UltraWide, 160Hz, WQHD, 1ms, DisplayPort e HDMI, AMD FreeSync Premium, HDR10, 99% sRGB - 34GP63A-B",
        price: "R$ 3.111,10",
        oldPrice: "R$ 2.299,99",
        discount: 17,
        src: require("@/resources/products/monitor-gamer-lg-ultragear-lg-34-curvo-led-wqhd-ultrawide-160hz-1ms-displayport-e-hdmi-amd-freesync-premium-hdr10-99-srgb-34gp63a-b_1717591886_m.webp"),
        rating: 500,},
      {
        id: 3,
        title: "Notebook Samsung Galaxy Book4 Intel Core i5-1335U, 8GB RAM, SSD 512GB, 15,6'' Full HD, Iris Xe Graphics, Win 11H, Grafite - NP750XGJ-KG3BR",
        price: "R$ 4.444,44",
        oldPrice: "R$ 3.399,99",
        discount: 15,
        src: require("@/resources/products/notebook-samsung-galaxy-book4-intel-core-i5-1335u-8gb-ram-ssd-512gb-15-6-full-hd-iris-xe-graphics-win-11h-grafite-np750xgj-kg3br_1720107551_g.webp"),
        rating: 7,},
      {
        id: 4,
        title: "Processador AMD Ryzen 7 5700X3D, 3.0 GHz, (4.1GHz Max Turbo), Cache 4MB, 8 Núcleos, 16 Threads, AM4 - 100-100001503WOF",
        price: "R$ 2.298,88",
        oldPrice: "R$ 1.649,99",
        src: require("@/resources/products/processador-amd-ryzen-7-5700x3d-3-6-ghz-4-1ghz-max-turbo-cache-4mb-8-nucleos-16-threads-am4-video-integrado-100-100001503wof_1708023990_g.webp"),
        rating: 656,},
      {
        id: 5,
        title: "Console PlayStation 5 Slim Sony, SSD 1TB, Com Controle Sem Fio DualSense, Branco + 2 Jogos - 1000038899",
        price: "R$ 3.719,07",
        oldPrice: "R$ 3.719,07",
        src: require("@/resources/products/console-playstation-5-sony-slim-branco-2-jogos-1000038899_1710512868_m.webp"),
        rating: 7,},
  ]

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
            {products.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[275px]">
                <div className="p-3">
                <ProductCard product={product}>
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
