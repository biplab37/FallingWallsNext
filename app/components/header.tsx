"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const navLinks = [
  // {
  //     label: "Home",
  //     href: "/",
  // },
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Information",
    href: "/information",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-4">
        <Link href="/">
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
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button
          className="text-white font-medium bg-red-600 px-3 py-2 my-2 mx-0 flex justify-end rounded-xl text-lg"
          onClick={() =>
            window.open(
              "https://falling-walls.com/lab/apply/wroclaw/",
              "_blank"
            )
          }
          // animate={{
          //   scale: [1, 1.1, 1],
          // }}
        >
          Apply Now
        </button>
        {/* Mobile Navigation Icon */}
        <div onClick={handleToggle} className="block md:hidden">
          {/* {isOpen ? <X size={25} /> : <Menu size={25} />} */}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            isOpen
              ? "fixed md:hidden w-[60%] top-20 right-0 bg-white shadow-xl ease-in-out duration-500"
              : "hidden ease-in-out w-[60%] duration-500 fixed top-24 -right-[100%]"
          }
        >
          {/* Mobile Navigation Items */}
          {navLinks.map((item) => (
            <li key={item.label} className="p-4 rounded-xl cursor-pointer">
              <Link
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-red-700 hover:border-b-[2px] hover:border-red-700 transition-colors duration-300 ease-in-out"
                href={item.href}
                onClick={handleToggle}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
