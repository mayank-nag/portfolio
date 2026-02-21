"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" }
];

export default function Navbar() {

  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");

  /* ================= THEME INIT ================= */

  useEffect(() => {

  const savedTheme = localStorage.getItem("theme") || "dark";

  setTheme(savedTheme);

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

}, []);

  /* ================= THEME TOGGLE ================= */

 const toggleTheme = () => {

  const newTheme = theme === "dark" ? "light" : "dark";

  setTheme(newTheme);

  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.documentElement.classList.remove("dark");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

};


  /* ================= SCROLL SPY ================= */

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
      bg-black/40 dark:bg-black/40
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
        <div className="flex items-center gap-6">

          {links.map(link => (

            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-1 py-1"
            >

              <span
                className={
                  active === link.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                }
              >
                {link.name}
              </span>


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


          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
              ml-2
              w-10 h-10
              flex items-center justify-center
              rounded-full
              border border-gray-700
              hover:border-white
              transition
            "
          >

            {theme === "dark"
              ? <FiSun size={18}/>
              : <FiMoon size={18}/>
            }

          </button>

        </div>

      </div>

    </nav>
  );
}