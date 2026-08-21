import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Main Navigation */}
      <motion.nav 
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className="bg-background/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        >
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
              >
                <motion.a 
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-full hover:bg-accent/50 relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-accent/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ 
            y: [0, -4, 0],
            boxShadow: [
              "0 10px 25px rgba(0,0,0,0.1)",
              "0 15px 35px rgba(0,0,0,0.15)",
              "0 10px 25px rgba(0,0,0,0.1)"
            ]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>
    </>
  )
}