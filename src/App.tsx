import { Hero } from "@/components/Hero"
import { Portfolio } from "@/components/Portfolio"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Navigation } from "@/components/Navigation"
import { FloatingElements } from "@/components/FloatingElements"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Toaster />
    </div>
  )
}

export default App