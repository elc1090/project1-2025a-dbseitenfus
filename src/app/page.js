import Image from "next/image";
import HomeCarousel from "@/components/HomeCarousel";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center">
        <HomeCarousel />
        
      </main>
    </div>
  );
}
