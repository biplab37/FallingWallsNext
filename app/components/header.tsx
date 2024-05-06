"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";
import { AnimatePresence, motion, stagger } from "framer-motion";

const navLinks = [
  {
    label: "Home",
    href: "./",
  },
  {
    label: "About",
    href: "./about",
  },
  {
    label: "Information",
    href: "./information",
  },
  {
    label: "Gallery",
    href: "./gallery",
  },
  {
    label: "Contact",
    href: "./contact",
  },
];

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      type: "tween",
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-4">
        <Link href="./">
          {/* <Image
            src="./fwl-logo_crop.webp"
            width={60}
            height={60}
            alt="Falling Walls Lab Wroclaw Logo"
          /> */}
          <img
            src="./fwl-logo_crop.webp"
            alt="Falling Walls Lab Wroclaw Logo"
            className="h-12 w-auto"
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-xl:gap-8 max-md:hidden">
          {navLinks.map((item) => (
            <motion.li
              key={item.label}
              className="text-lg hover:text-red-600 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              // whileHover={{ scale: 1.05 }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </ul>
        <motion.button
          className="text-white font-medium bg-red-600 px-3 py-2 my-2 mx-0 flex justify-end rounded-xl text-lg"
          onClick={() =>
            window.open(
              "https://falling-walls.com/lab/apply/wroclaw/",
              "_blank"
            )
          }
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          Apply Now
        </motion.button>
        {/* Mobile Navigation Icon */}
        <div onClick={handleToggle} className="block md:hidden z-10">
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </div>
      </div>
      <AnimatePresence>
        {/* Mobile Navigation Menu */}

        <motion.ul
          // className={
          //   isOpen
          //     ? "fixed md:hidden w-[60%] top-0 right-0 bg-white shadow-xl ease-in-out duration-500"
          //     : "hidden ease-in-out w-[60%] duration-700 fixed -right-[100%]"
          // }
          // initial={{ opacity: 0.6, x: "100%" }}
          className={
            isOpen
              ? "fixed md:hidden w-[60%] top-14 right-0 bg-white shadow-xl rounded-bl-lg py-2"
              : "hidden"
          }
          variants={menuVariants}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          // exit="closed"
        >
          {/* Mobile Navigation Items */}
          {navLinks.map((item) => (
            <motion.li
              key={item.label}
              className="px-8 py-4 rounded-xl cursor-pointer"
              // initial={{ opacity: 0 }}
              variants={menuItemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              // animate={isOpen ? "open" : "closed"}
              // exit="closed"
            >
              <Link
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-red-700 hover:border-b-[2px] hover:border-red-700 transition-colors duration-300 ease-in-out"
                href={item.href}
                onClick={handleToggle}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </nav>
  );
}
