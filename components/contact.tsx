"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {

  return (
    <section id="contact" className="scroll-section flex items-center justify-center px-8">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16">

        {/* LEFT — INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-5xl font-bold mb-6">
            Contact
          </h1>

          <p className="text-gray-400 mb-8 text-lg">
            I'm open to internships, collaborations, and opportunities.
            Feel free to reach out.
          </p>


          {/* EMAIL */}
          <div className="flex items-center gap-4 mb-6 text-gray-400">

            <FaEnvelope />

            <a
              href="mailto:your@email.com"
              className="hover:text-white transition"
            >
              Mayankn645@gmail.com
            </a>

          </div>


          {/* SOCIALS */}
          <div className="flex gap-4">

            <a
              href="https://github.com/Mayank-nag"
              target="_blank"
              className="
                w-12 h-12
                border border-gray-700
                rounded-full
                flex items-center justify-center
                hover:border-white
                hover:scale-110
                transition
              "
            >
              <FaGithub />
            </a>


            <a
              href="https://www.linkedin.com/in/mayank-nagar-b47995328/E"
              target="_blank"
              className="
                w-12 h-12
                border border-gray-700
                rounded-full
                flex items-center justify-center
                hover:border-white
                hover:scale-110
                transition
              "
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>



        {/* RIGHT — FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          action="mailto:your@email.com"
          method="POST"
          className="flex flex-col gap-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            className="
              bg-black
              border border-gray-800
              rounded-lg
              p-4
              focus:border-white
              outline-none
              transition
            "
          />


          <input
            type="email"
            placeholder="Your Email"
            required
            className="
              bg-black
              border border-gray-800
              rounded-lg
              p-4
              focus:border-white
              outline-none
              transition
            "
          />


          <textarea
            placeholder="Message"
            rows={5}
            required
            className="
              bg-black
              border border-gray-800
              rounded-lg
              p-4
              focus:border-white
              outline-none
              transition
            "
          />


          <button
            type="submit"
            className="
              border border-white
              rounded-lg
              py-4
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
}