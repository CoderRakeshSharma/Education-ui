import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";
import BoxSection from "@/components/BoxSection";
import Card1st from "@/components/Card1st";
import Experience from "@/components/Experience";
import Card2nd from"../components/Card2nd";
import Card3rd from "@/components/Card3rd";
import NewsLetter from "@/components/NewsLetter";
import Footer from "../components/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <BoxSection />
      <Card1st />
      <Experience />
      <Card2nd />
      <Card3rd />
      <NewsLetter />
      <Footer />
    </div>
  );
}
