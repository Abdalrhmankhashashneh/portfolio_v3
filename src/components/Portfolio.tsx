import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useKV } from "@github/spark/hooks"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'design'
}

export function Portfolio() {
  const [projects] = useKV<Project[]>("portfolio-projects", [
    {
      id: "shopsze",
      title: "Shopsze E-commerce Platform",
      description: "A comprehensive e-commerce platform similar to Shopify, built with React and Laravel. Features payment gateway integration, inventory management, and multi-vendor support.",
      image: "",
      tags: ["React", "Laravel", "PHP", "MySQL", "REST API", "Payment Gateway"],
      githubUrl: "https://github.com/abdalrhmankhashashneh",
      category: "web"
    },
    {
      id: "restaurant-site",
      title: "Restaurant Services Website",
      description: "Full-featured restaurant website with online ordering, reservation system, and menu management. Built with React frontend and Laravel API backend.",
      image: "",
      tags: ["React", "Laravel", "API", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/abdalrhmankhashashneh",
      category: "web"
    },
    {
      id: "cinema-system",
      title: "Cinema Web System",
      description: "Movie booking system with seat selection, showtimes management, and payment processing. Features Redux for state management and responsive design.",
      image: "",
      tags: ["React", "Redux", "Laravel", "API", "JavaScript"],
      githubUrl: "https://github.com/abdalrhmankhashashneh",
      category: "web"
    },
    {
      id: "ecommerce-website",
      title: "E-commerce Website",
      description: "Custom e-commerce solution with product catalog, shopping cart, and admin dashboard. Built with PHP, MySQL, and Bootstrap for responsive design.",
      image: "",
      tags: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/abdalrhmankhashashneh",
      category: "web"
    },
    {
      id: "management-app",
      title: "Management Application",
      description: "Business management system with user roles, reporting, and dashboard analytics. Built entirely with Laravel framework and modern UI components.",
      image: "",
      tags: ["Laravel", "PHP", "MySQL", "Dashboard", "Analytics"],
      githubUrl: "https://github.com/abdalrhmankhashashneh",
      category: "web"
    },
    {
      id: "travel-booking",
      title: "Travel Booking & Payment App",
      description: "Online booking and payment application for travel agency. Integrated multiple payment gateways and booking management system.",
      image: "",
      tags: ["PHP", "React", "Laravel", "Payment API", "Travel"],
      githubUrl: "https://github.com/abdalrhmankhashashneh",
      category: "web"
    }
  ])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating 
            meaningful digital experiences through code and design.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <motion.div 
                  className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ y: -10 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <Globe className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      )}
                      {project.githubUrl && (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-6xl font-bold text-primary/30"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1] 
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: index * 0.5,
                        ease: "easeInOut" 
                      }}
                    >
                      {project.title.charAt(0)}
                    </motion.div>
                  </div>
                </motion.div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: tagIndex * 0.05 
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs font-medium cursor-default"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {projects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-lg mb-4">
              Portfolio projects will appear here
            </p>
            <p className="text-sm text-muted-foreground">
              This is a demo portfolio - add your projects using the portfolio management system
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}