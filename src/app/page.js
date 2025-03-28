import Image from "next/image";
import HomeCarousel from "@/components/HomeCarousel";
import HomeProductsSection from "@/components/HomeProductsSection";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center">
        <div className="bg-black flex flex-col justify-center container items-center">
          <HomeCarousel />

          <HomeProductsSection />
        </div>
        
      </main>
    </div>
  );
}
