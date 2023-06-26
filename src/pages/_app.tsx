import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";
import NewsLetter from "@/components/NewsLetter";
import Footer from "../components/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <NewsLetter />
      <Footer />
    </div>
  );
}
