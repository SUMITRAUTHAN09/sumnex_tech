import About from "@/components/about";
import BackgroundLines from "@/components/backgroundLines";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-gray-300 dark:bg-black overflow-hidden">
      {/* BACKGROUND */}
      <BackgroundLines />

      {/* CONTENT */}
      <div className="relative z-10">
        <Header />
        <About />
        <Footer />
      </div>
    </main>
  );
}
