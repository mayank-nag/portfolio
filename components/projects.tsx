"use client";

import { motion, Variants } from "framer-motion";
import { FiGithub, FiArrowUpRight, FiClock } from "react-icons/fi";

const projects = [
  {
    title: "Women Safety App",
    description:
      "Responsive safety-focused web application providing emergency access features and reliable navigation with accessibility-first design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Mayank-nag/women_safety_app",
    updated: "Feb 2026"
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with Next.js and Framer Motion featuring smooth animations and responsive design.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/Mayank-nag/portfolio",
    updated: "Feb 2026"
  },
  {
    title: "Game Development with PyGame",
    description:
      "Interactive games built using PyGame implementing physics, collision systems, and event-driven architecture.",
    tech: ["Python", "PyGame"],
    github: "https://github.com/Mayank-nag/Game_development_py_games",
    updated: "Oct 2025"
  },
  {
    title: "Secure Environment Project",
    description:
      "Cybersecurity-focused Python project exploring secure execution environments and controlled system access.",
    tech: ["Python", "Cybersecurity", "Linux"],
    github: "https://github.com/Mayank-nag/Secure_env_projec",
    updated: "Oct 2025"
  },
  {
    title: "Mango AI Classification",
    description:
      "Deep learning system using TensorFlow and computer vision to classify mango varieties with high accuracy.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/Mayank-nag/_Mangoid_",
    updated: "Sep 2025"
  }
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {

  return (
    <section id="projects" className="scroll-section flex justify-center px-6">

      <div className="max-w-4xl w-full">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-16"
        >
          Projects
        </motion.h1>


        {/* PROJECT LIST */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-6"
        >

          {projects.map((project) => (

            <motion.div
              key={project.title}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.01
              }}
              className="
                group
                border border-gray-800
                bg-neutral-900
                rounded-xl
                p-6
                transition-all duration-300
                hover:border-white/40
                hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]
              "
            >

              {/* HEADER */}
              <div className="flex justify-between items-start mb-3">

                <div>

                  <h3 className="
                    text-xl font-semibold
                    group-hover:text-white
                    transition
                  ">
                    {project.title}
                  </h3>

                  {/* UPDATED */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <FiClock size={14}/>
                    Updated {project.updated}
                  </div>

                </div>


                {/* GITHUB BUTTON */}
                <a
                  href={project.github}
                  target="_blank"
                  className="
                    flex items-center gap-2
                    border border-gray-700
                    px-3 py-2
                    rounded-lg
                    text-sm
                    text-gray-300
                    hover:text-white
                    hover:border-white
                    hover:bg-white/5
                    transition-all duration-300
                  "
                >
                  <FiGithub size={16}/>
                  GitHub
                  <FiArrowUpRight size={14}/>
                </a>

              </div>


              {/* DESCRIPTION */}
              <p className="
                text-gray-400 mb-4
                group-hover:text-gray-300
                transition
              ">
                {project.description}
              </p>


              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="
                      text-xs
                      border border-gray-700
                      px-2 py-1
                      rounded-md
                      text-gray-400
                      group-hover:border-gray-500
                      transition
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}