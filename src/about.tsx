import { motion } from "framer-motion"
const text =
  "Hello! I'm Kartik, a passionate web developer who loves to explore the latest technologies and build full-stack applications. With a focus on both front-end and back-end development, I enjoy creating user-friendly, responsive websites. I have experience with React, Tailwind CSS, Node.js, and MongoDB. Currently, I'm diving deep into new technologies like Next.js and Prisma to expand my knowledge and improve my projects. I'm always eager to learn more, take on new challenges, and collaborate with others to create something impactful!"

export default function About() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.02,
              },
            },
          }}
          className="text-gray-600 text-lg"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
