import NavBar from "@/components/navbar/NavBar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import ClickGame from "@/components/game/ClickGame";
import Grid from "@/components/grid/Grid";

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden text-clip px-5 sm:px-10">
      <div className="fixed top-0 -z-10 size-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="w-full max-w-7xl">
        <NavBar />
        <Hero />
        <About />
        <ClickGame />
        <Grid />
      </div>
    </main>
  );
};

export default Home;
