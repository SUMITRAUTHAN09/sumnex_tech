import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Page(){
  return (
    <section className="flex flex-col item-center justify-center">
    <Header/>
    <About/>
    <Footer/>
    </section>
  );
}