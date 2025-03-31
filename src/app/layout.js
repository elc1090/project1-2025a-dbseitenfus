import "./globals.css";

import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/NavBar";
import HomeNavigationMenu from "@/components/HomeNavigationMenu";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "KaBum! Clone",
  description: "Clone do site KaBum! desenvolvido com Next.js",
};

// Importando a fonte Poppins com diferentes pesos
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Pesos que queremos carregar
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <TopBanner />
        <Navbar />
        <HomeNavigationMenu />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
