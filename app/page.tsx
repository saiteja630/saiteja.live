import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";

const About = dynamic(() =>
  import("@/components/sections/About").then((mod) => mod.About),
);
const SelectedWork = dynamic(() =>
  import("@/components/sections/SelectedWork").then((mod) => mod.SelectedWork),
);
const Expertise = dynamic(() =>
  import("@/components/sections/Expertise").then((mod) => mod.Expertise),
);
const Platforms = dynamic(() =>
  import("@/components/sections/Platforms").then((mod) => mod.Platforms),
);
const Industry = dynamic(() =>
  import("@/components/sections/Industry").then((mod) => mod.Industry),
);
const AISpecialty = dynamic(() =>
  import("@/components/sections/AISpecialty").then((mod) => mod.AISpecialty),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((mod) => mod.Contact),
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <SelectedWork />
      <Expertise />
      <Platforms />
      <Industry />
      <AISpecialty />
      <Contact />
    </>
  );
}
