"use client";

import { motion, Variants } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";

/* ================= PREMIUM ANIMATION PRESETS ================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

/* ================= COMPONENT ================= */

export default function About() {

  return (
    <>
      {/* ================= BIO SECTION ================= */}

      <section  id="about" className="scroll-section flex items-center justify-center px-6">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row max-w-6xl w-full gap-12 items-center"
        >

          {/* PROFILE SIDE */}
          <motion.div
            variants={fadeLeft}
            className="flex flex-col items-center md:w-[30%]"
          >

            <motion.img
              src="/pfp.jpg"
              alt="Profile"
              variants={scaleIn}
              whileHover={{ scale: 1.06 }}
              className="
                w-40 h-40
                rounded-full
                object-cover
                border border-gray-700
                shadow-lg
                mb-6
              "
            />

            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-3"
            >

              <a
                href="/resume.pdf"
                target="_blank"
                className="
                  flex items-center gap-2
                  border border-gray-700
                  px-5 py-2
                  rounded-lg
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  transition-all duration-300
                "
              >
                View Resume
                <FiExternalLink size={16}/>
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                  w-12 h-12
                  rounded-full
                  border border-gray-700
                  flex items-center justify-center
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  hover:scale-110
                  transition-all duration-300
                "
              >
                <FiDownload size={18}/>
              </a>

            </motion.div>

          </motion.div>


          {/* BIO CARD */}
          <motion.div
            variants={fadeRight}
            whileHover={{ y: -6 }}
            className="
              md:w-[70%]
              bg-neutral-900
              border border-gray-800
              p-8 md:p-10
              rounded-xl
              shadow-lg
              hover:border-gray-600
              transition-all duration-300
            "
          >

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Me
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg leading-relaxed"
            >

              I'm a Computer Science student specializing in Cyber Security,
              focused on building secure, scalable, and intelligent systems.

              <br/><br/>

              My interests include backend development, machine learning,
              cybersecurity tooling, and modern web applications.

              <br/><br/>

              I actively explore Linux environments, security tools,
              and data-driven applications while continuously strengthening
              my system-level and software engineering expertise.

            </motion.p>

          </motion.div>

        </motion.div>

      </section>



      {/* ================= EDUCATION SECTION ================= */}

      <section className="scroll-section flex justify-center px-6">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full max-w-4xl"
        >

          {/* timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-800"
          />


          {/* UNIVERSITY */}
          <motion.div
            variants={fadeLeft}
            className="relative flex items-center mb-24"
          >

            <motion.div
              variants={scaleIn}
              className="
                absolute left-1/2 -translate-x-1/2
                w-16 h-16
                bg-white
                rounded-full
                flex items-center justify-center
                shadow-lg
              "
            >
              <img src="/university.png" className="w-10"/>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="
                bg-neutral-900
                border border-gray-800
                p-6
                rounded-lg
                w-full md:w-96
                ml-auto
                hover:border-gray-600
                transition-all duration-300
              "
            >

              <h3 className="text-xl font-semibold">
                B.Tech Computer Science (Cyber Security)
              </h3>

              <p className="text-gray-400">
                Jaipur National University
              </p>

              <p className="text-gray-500 text-sm">
                2024 — Present
              </p>

            </motion.div>

          </motion.div>


          {/* SCHOOL */}
          <motion.div
            variants={fadeRight}
            className="relative flex items-center"
          >

            <motion.div
              variants={scaleIn}
              className="
                absolute left-1/2 -translate-x-1/2
                w-16 h-16
                bg-white
                rounded-full
                flex items-center justify-center
                shadow-lg
              "
            >
              <img src="/school.png" className="w-10"/>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="
                bg-neutral-900
                border border-gray-800
                p-6
                rounded-lg
                w-full md:w-96
                mr-auto
                hover:border-gray-600
                transition-all duration-300
              "
            >

              <h3 className="text-xl font-semibold">
                Higher Secondary Education
              </h3>

              <p className="text-gray-400">
                St. Anselm Pink City Sr. Sec. School
              </p>

              <p className="text-gray-500 text-sm">
                2022 — 2024
              </p>

            </motion.div>

          </motion.div>

        </motion.div>

      </section>

    </>
  );
}