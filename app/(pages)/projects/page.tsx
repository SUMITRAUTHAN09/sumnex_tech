import BackgroundLines from "@/components/backgroundLines";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-gray-300 dark:bg-black overflow-x-hidden">
      {" "}
      {/* BACKGROUND */}
      <BackgroundLines />
      {/* CONTENT */}
      <div className="relative z-10">
        <Header />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
