import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";
import Card3rd from "@/components/Card3rd";
import NewsLetter from "@/components/NewsLetter";
import Footer from "../components/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Card3rd />
      <NewsLetter />
      <Footer />
    </div>
  );
}
