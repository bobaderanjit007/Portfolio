import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import Footer from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Portfolio } from "@/components/Portfolio"
import { Services } from "@/components/Services"
import { Skills } from "@/components/Skills"
import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:px-36">
      <div className="space-background" />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
