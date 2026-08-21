import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Heart, Coffee, Code, Gamepad2, Camera, Music } from "lucide-react"

const skills = [
  "PHP", "Laravel", "CakePHP", "React", "Next.js", "jQuery", 
  "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL", "REST API",
  "Linux", "Git", "SEO", "UI/UX Design", "Graphic Design"
]

const interests = [
  { icon: Code, label: "E-commerce Development", description: "Building platforms like Shopify with advanced features" },
  { icon: Coffee, label: "Teaching & Mentoring", description: "Volunteer teacher at Lily River Children's Foundation" },
  { icon: Camera, label: "Graphic Design", description: "Creating visual identities and marketing materials" },
  { icon: Gamepad2, label: "Problem Solving", description: "Optimizing performance and user experience" },
  { icon: Music, label: "Community Building", description: "Active member of Coding Masters Club" },
  { icon: Heart, label: "Open Source", description: "Contributing to community projects on GitHub" }
]

const achievements = [
  {
    title: "Shopsze E-commerce Platform",
    description: "Built a comprehensive e-commerce platform similar to Shopify using React & Laravel",
    year: "2023"
  },
  {
    title: "40% Sales Boost",
    description: "Developed e-commerce payment gateway that increased client sales by 40%",
    year: "2022"
  },
  {
    title: "Coding Bootcamp Graduate",
    description: "Completed 7-month Full-Stack Bootcamp with Coding Academy by Orange",
    year: "2022"
  }
]

const experience = [
  {
    role: "Senior Fullstack Web Developer",
    company: "Basic Soft",
    period: "May 2023 - Present",
    description: "Leading development of Shopsze e-commerce platform, integrating payment gateways, and managing Linux server deployments"
  },
  {
    role: "Mid Fullstack Web Developer",
    company: "Systechzone",
    period: "Jan 2023 - May 2023", 
    description: "Designed, developed, and maintained web applications while collaborating with teams to deliver client requirements"
  },
  {
    role: "Fullstack Developer",
    company: "Orange",
    period: "2022 - 2023",
    description: "Built APIs, optimized performance, created responsive designs, and developed custom CRM systems"
  },
  {
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2020 - 2022",
    description: "Developed custom websites, implemented SEO strategies, and managed client relationships"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-8">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                  AK
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Abdalrhman Khashashneh</h3>
                <p className="text-muted-foreground font-medium">Senior Fullstack Developer</p>
              </div>
            </div>

            <div className="prose prose-lg text-foreground mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With 2+ years of experience in full-stack web development, I specialize in 
                building user-friendly web applications, e-commerce platforms, and robust APIs. 
                My expertise spans both front-end and back-end development, with a strong focus 
                on creating solutions that drive real business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey began with a Bachelor's degree in Computer Science from Irbid National 
                University (82.5%), followed by an intensive 7-month Full-Stack Bootcamp with 
                Coding Academy by Orange. This solid foundation allowed me to excel in both 
                technical implementation and graphic design, creating comprehensive digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Basic Soft, I've led the development of Shopsze, an e-commerce platform similar 
                to Shopify, integrating complex payment gateways and managing Linux server deployments. 
                My work at Orange resulted in a 40% sales boost through an innovative e-commerce 
                payment gateway solution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm passionate about giving back to the community. I volunteer 
                as a coding teacher at Lily River Children's Foundation and actively participate 
                in the Coding Masters Club, mentoring aspiring developers and contributing to 
                open-source projects on GitHub.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-primary mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-primary mb-4">Interests & Passions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200"
                  >
                    <interest.icon size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-sm text-primary">{interest.label}</h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">{interest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-primary mb-6">Experience</h4>
            <div className="space-y-6 mb-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h5 className="font-semibold text-lg text-primary">{job.role}</h5>
                          <p className="text-accent font-medium">{job.company}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {job.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <h4 className="text-xl font-semibold text-primary mb-6">Achievements</h4>
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-primary">{achievement.title}</h5>
                    <Badge variant="outline" className="text-xs bg-background">
                      {achievement.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-0 shadow-sm bg-gradient-to-br from-accent/10 to-primary/10 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-lg text-primary mb-3">Let's Connect</h5>
                  <p className="text-muted-foreground mb-4">
                    I'm always interested in new opportunities and collaborations. 
                    Whether you have a project in mind or just want to chat about 
                    web development and technology, I'd love to hear from you.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-accent font-medium">Available for freelance projects</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">abdalrhmankhashashneh@gmail.com</p>
                  <p className="text-sm text-muted-foreground">+962781959937 / +962797293112</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}