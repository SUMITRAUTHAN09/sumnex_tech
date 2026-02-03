import BackgroundLines from "@/components/backgroundLines";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Header from "@/components/header";
import Hero from "@/components/hero";
import SumnexTechMarquee from "@/components/SumnexTechMarquee";
import { CONSTANTS } from "./constant";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gray-300 dark:bg-black overflow-x-hidden">  
      {/* BACKGROUND */} 
      <BackgroundLines />

      {/* CONTENT */}
      <div className="relative z-10">
        <Header />
        <h1 className="text-5xl text-red-700 flex justify-center mt-5 "><strong>{CONSTANTS.COMPANY_NAME}</strong></h1>
        <SumnexTechMarquee/>
        <Hero />
        <Grid />
        <ContactForm/>
        <Footer/>
      </div>

    </main>
  );
}
