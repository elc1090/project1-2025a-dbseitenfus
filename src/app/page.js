import Image from "next/image";
import HomeCarousel from "@/components/HomeCarousel";
import HomeProductsSection from "@/components/HomeProductsSection";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center">
        <div className="flex flex-col justify-center w-full items-center pr-5 pl-5">
          <HomeCarousel />

          <HomeProductsSection />
        </div>
        
      </main>
    </div>
  );
}
