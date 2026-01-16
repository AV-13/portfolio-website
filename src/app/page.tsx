import {
  Header,
  Hero,
  About,
  Services,
  Projects,
  Experience,
  CTA,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
