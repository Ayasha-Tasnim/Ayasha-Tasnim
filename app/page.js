import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Statistics from "@/sections/Statistics";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050816] overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Statistics Section */}
        <Statistics />

        {/* Education Timeline */}
        <Education />

        {/* Experience Timeline */}
        <Experience />

        {/* Contact Form & Direct Handles */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
