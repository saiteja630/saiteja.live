import { About } from "@/components/sections/About";
import { AISpecialty } from "@/components/sections/AISpecialty";
import { Contact } from "@/components/sections/Contact";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Industry } from "@/components/sections/Industry";
import { Marquee } from "@/components/sections/Marquee";
import { Platforms } from "@/components/sections/Platforms";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Expertise />
      <Platforms />
      <Industry />
      <AISpecialty />
      <Contact />
    </>
  );
}
