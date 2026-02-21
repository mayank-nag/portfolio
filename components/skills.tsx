"use client";

import { motion } from "framer-motion";

export default function Skills() {

  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "C", "C++"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "SCSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Cybersecurity",
      skills: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark"],
    },
    {
      title: "Systems",
      skills: ["Linux", "Ubuntu", "Bash", "Terminal"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "Firebase"],
    },
    {
      title: "Python Ecosystem",
      skills: ["Pandas", "TensorFlow", "Matplotlib", "Pygame"],
    },
  ];

  return (
    <section id="skills" className="scroll-section flex flex-col justify-center px-8">

      <div className="max-w-6xl mx-auto w-full">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-16"
        >
          Skills
        </motion.h1>


        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="
                border border-gray-800
                rounded-xl
                p-6
                bg-neutral-900
                hover:border-gray-600
                transition
              "
            >

              {/* CATEGORY */}
              <h2 className="text-xl font-semibold mb-4">
                {group.title}
              </h2>


              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">

                {group.skills.map(skill => (

                  <span
                    key={skill}
                    className="
                      px-3 py-1
                      text-sm
                      border border-gray-700
                      rounded-md
                      text-gray-400
                      hover:text-white
                      hover:border-gray-500
                      transition
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
    
  );
}