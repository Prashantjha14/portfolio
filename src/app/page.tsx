import NavBar from "@/components/navbar/NavBar";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden text-clip px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <NavBar />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
