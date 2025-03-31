import Image from "next/image"

import TopBannerImage from "@/resources/top-banner.webp"

export default function TopBanner() {
  return (
    <div className="w-full">
        <Image src={TopBannerImage} />
    </div>
  )
}