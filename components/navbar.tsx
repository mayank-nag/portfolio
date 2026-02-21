"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" }
];

export default function Navbar() {

  const [active, setActive] = useState("home");

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    links.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();

  }, []);


  return (
    <nav className="
      fixed top-0 left-0 right-0
      z-50
      backdrop-blur-md
      bg-black/40
      border-b border-gray-800
    ">

      <div className="
        max-w-6xl mx-auto
        flex justify-between items-center
        px-6 py-4
      ">

        {/* LOGO */}
        <a href="#home" className="font-bold text-lg">
          .Mayank
        </a>


        {/* LINKS */}
        <div className="flex gap-8 relative">

          {links.map(link => (

            <a
              key={link.id}
              href={`#${link.id}`}
              className="
                relative
                text-sm
                transition
                px-1 py-1
              "
            >

              {/* TEXT */}
              <span
                className={
                  active === link.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                }
              >
                {link.name}
              </span>


              {/* ANIMATED UNDERLINE */}
              {active === link.id && (
                <motion.div
                  layoutId="underline"
                  className="
                    absolute
                    left-0 right-0
                    -bottom-1
                    h-[2px]
                    bg-white
                  "
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}

            </a>

          ))}

        </div>

      </div>

    </nav>
  );
}