import Image from "next/image"

import TopBannerImage from "@/resources/top-banner.webp"

export default function TopBanner() {
  return (
    <div className="w-full h-[70px] relative">
        <Image 
          src={TopBannerImage}
          alt="Top Banner"
          fill
          className="object-cover" />
    </div>
  )
}