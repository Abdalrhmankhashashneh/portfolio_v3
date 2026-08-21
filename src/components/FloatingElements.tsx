import { motion } from "framer-motion"

const svgElements = [
  {
    id: 1,
    path: "M12 2L2 7V17L12 22L22 17V7L12 2Z", // Diamond
    size: 32,
    color: "text-accent/20",
    duration: 20,
    delay: 0
  },
  {
    id: 2,
    path: "M3 3L21 21M9 9L21 3L15 15L9 9Z", // Arrow
    size: 28,
    color: "text-primary/15",
    duration: 25,
    delay: 5
  },
  {
    id: 3,
    path: "M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z", // Star
    size: 24,
    color: "text-secondary/20",
    duration: 30,
    delay: 10
  },
  {
    id: 4,
    path: "M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z", // Rectangle
    size: 36,
    color: "text-muted/15",
    duration: 22,
    delay: 15
  },
  {
    id: 5,
    path: "M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z", // Star outline
    size: 20,
    color: "text-accent/25",
    duration: 35,
    delay: 20
  },
  {
    id: 6,
    path: "M3 12L12 3L21 12L12 21L3 12Z", // Diamond filled
    size: 26,
    color: "text-primary/10",
    duration: 28,
    delay: 8
  },
  {
    id: 7,
    path: "M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2Z", // Code file
    size: 30,
    color: "text-accent/18",
    duration: 26,
    delay: 12
  },
  {
    id: 8,
    path: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", // Check circle
    size: 22,
    color: "text-primary/22",
    duration: 32,
    delay: 18
  },
  {
    id: 9,
    path: "M4 7V4A2 2 0 0 1 6 2H18A2 2 0 0 1 20 4V7M4 7V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7M4 7H20M10 11V17M14 11V17", // Database
    size: 28,
    color: "text-secondary/18",
    duration: 24,
    delay: 6
  },
  {
    id: 10,
    path: "M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12", // Layers
    size: 34,
    color: "text-muted/20",
    duration: 27,
    delay: 14
  }
]

// Tech-themed floating icons
const techIcons = [
  {
    id: 11,
    content: "{ }", // Curly braces
    size: 24,
    color: "text-accent/25",
    duration: 23,
    delay: 3
  },
  {
    id: 12,
    content: "</>", // HTML tags
    size: 20,
    color: "text-primary/20",
    duration: 29,
    delay: 7
  },
  {
    id: 13,
    content: "λ", // Lambda
    size: 18,
    color: "text-secondary/22",
    duration: 31,
    delay: 11
  },
  {
    id: 14,
    content: "→", // Arrow
    size: 22,
    color: "text-accent/18",
    duration: 25,
    delay: 16
  },
  {
    id: 15,
    content: "#", // Hash
    size: 20,
    color: "text-muted/20",
    duration: 28,
    delay: 4
  }
]

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* SVG Elements */}
      {svgElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
            rotate: 0,
            scale: 0.5,
            opacity: 0
          }}
          animate={{
            x: typeof window !== 'undefined' ? [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ] : [0, 200, 400],
            y: typeof window !== 'undefined' ? [
              window.innerHeight + 100,
              Math.random() * window.innerHeight * 0.8,
              -100
            ] : [1000, 400, -100],
            rotate: [0, 180, 360],
            scale: [0.5, 1, 0.8, 0.5],
            opacity: [0, 0.6, 0.8, 0.4, 0]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg
            width={element.size}
            height={element.size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`${element.color} drop-shadow-sm`}
          >
            <path d={element.path} />
          </svg>
        </motion.div>
      ))}
      
      {/* Tech Symbol Elements */}
      {techIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute font-mono font-bold"
          style={{ fontSize: icon.size }}
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
            rotate: 0,
            scale: 0.3,
            opacity: 0
          }}
          animate={{
            x: typeof window !== 'undefined' ? [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ] : [0, 150, 300],
            y: typeof window !== 'undefined' ? [
              window.innerHeight + 50,
              Math.random() * window.innerHeight * 0.9,
              -50
            ] : [1000, 500, -50],
            rotate: [0, 90, 180, 270, 360],
            scale: [0.3, 0.8, 1, 0.6, 0.3],
            opacity: [0, 0.7, 0.9, 0.5, 0]
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className={`${icon.color} drop-shadow-sm`}>{icon.content}</span>
        </motion.div>
      ))}
      
      {/* Enhanced particle effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-accent/30 rounded-full"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
            opacity: 0
          }}
          animate={{
            x: typeof window !== 'undefined' ? [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ] : [0, 200],
            y: typeof window !== 'undefined' ? [window.innerHeight + 10, -10] : [1000, -10],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Floating code snippets */}
      {['React', 'PHP', 'Laravel', 'JS', 'CSS', 'API'].map((tech, i) => (
        <motion.div
          key={`tech-${i}`}
          className="absolute text-xs font-mono font-semibold"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
            y: typeof window !== 'undefined' ? window.innerHeight + 30 : 1000,
            rotate: 0,
            scale: 0.4,
            opacity: 0
          }}
          animate={{
            x: typeof window !== 'undefined' ? [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth * 0.8,
              Math.random() * window.innerWidth
            ] : [0, 100, 200],
            y: typeof window !== 'undefined' ? [
              window.innerHeight + 30,
              Math.random() * window.innerHeight * 0.7,
              -30
            ] : [1000, 400, -30],
            rotate: [0, 15, -15, 0],
            scale: [0.4, 0.7, 0.9, 0.5, 0.4],
            opacity: [0, 0.5, 0.8, 0.3, 0]
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            delay: Math.random() * 25 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-primary/20 bg-background/10 px-1 py-0.5 rounded border border-primary/10">
            {tech}
          </span>
        </motion.div>
      ))}
    </div>
  )
}