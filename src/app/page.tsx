import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
