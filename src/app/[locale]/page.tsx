import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MotionEffects } from "@/components/motion/MotionEffects";

export default function Home() {
  return (
    <>
    <div id="home" className="site-motion relative isolate flex min-h-svh flex-col overflow-clip">
      <div aria-hidden="true" className="pointer-events-none absolute -inset-y-32 -right-72 -z-10 w-3/4 rounded-full bg-radial from-glow/20 via-glow/5 to-transparent blur-3xl" />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MotionEffects />
    </div>
    <FloatingWhatsApp />
    </>
  );
}
