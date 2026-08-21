import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100 
            }}
          >
            Abdalrhman Khashashneh
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-secondary font-medium mb-8 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Senior Fullstack Web Developer & Graphic Designer
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build user-friendly web applications, e-commerce platforms, and APIs with 5+ years 
            of experience in full-stack development. Specializing in React, Laravel, and modern 
            web technologies that drive business growth.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="group px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { href: "https://github.com/abdalrhmankhashashneh", icon: Github },
            { href: "https://linkedin.com/in/abdalrhman-khashashneh", icon: Linkedin },
            { href: "mailto:abdalrhmankhashashneh@gmail.com", icon: Mail }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.href.includes('mailto') ? undefined : "_blank"}
              rel={social.href.includes('mailto') ? undefined : "noopener noreferrer"}
              className="p-3 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              whileHover={{ 
                scale: 1.15, 
                rotate: 360,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <social.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ background: "radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)" }}
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </section>
  )
}