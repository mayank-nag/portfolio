



"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section  id="home" className="min-h-screen flex items-center justify-center bg-black text-white px-6 pt-20">

            <div className="max-w-4xl">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-8xl font-bold mb-6"
                >
                    Mayank Nagar
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-4xl text-gray-400 mb-6"
                >
                    Software Developer | AI-ML Applications | Cybersecurity Enthusiast
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-500 mb-8 leading-relaxed"
                >
                    I specialize in turning ideas into real-world applications using
                    Flutter, Python, and modern web technologies. With a strong foundation
                    in Data Structures and Algorithms, I focus on building scalable,
                    efficient, and secure systems while continuously exploring emerging technologies.
                </motion.p>

                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 items-center"
                >

                {/* View Projects */}
                <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                    View Projects
                </button>

                {/* GitHub round icon */}
                <a
                    href="https://github.com/Mayank-nag"
                    target="_blank"
                    className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-full
                    border border-gray-600
                    hover:border-white
                    hover:scale-110
                    transition
                    "
                >
                    <FaGithub size={20} />
                </a>

                </motion.div>

            </div>

        </section>
    );
}