import Link from "next/link";
import { Facebook, GitHub, Mail, Phone, Twitter } from "react-feather";
import FooterBoxes from "./footer_boxes";
const textdata = [
  {
    title: "Resources",
    links: [
      {
        href: "https://falling-walls.com/lab/",
        label: "Falling Walls Lab Main Website",
      },
      {
        href: "",
        label: "University of Wrocław",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        href: "tel:+48602528824",
        label: "+48 602 528 824",
        icon: <Phone className="inline-block w-4 h-4 -mt-1 me-1" />,
      },
      {
        href: "mailto:david.blaschke@uwr.edu.pl",
        label: "david.blaschke@uwr.edu.pl",
        icon: <Mail className="inline-block w-4 h-4 -mt-1 me-1" />,
      },
    ],
  },
];

const bottomline = {
  copyright: "© 2024 Biplab Mahato. All Rights Reserved.",
  social: [
    {
      href: "#",
      icon: <Facebook className="h-6 w-6" />,
      text: "Facebook page",
    },
    {
      href: "#",
      icon: <Twitter className="h-6 w-6" />,
      text: "Twitter page",
    },
    {
      href: "#",
      icon: <GitHub className="h-6 w-6" />,
      text: "GitHub account",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="pb-6 sm:pb-0 w-2/3 sm:w-1/2 md:w-1/4">
            <img src="./fwl-logo.webp" alt="Falling Walls Lab Wrocław" />
          </div>
          <div className="grid grid-cols-1 gap-12 sm:gap-24 sm:grid-cols-2">
            {textdata.map((data, index) => (
              <FooterBoxes key={index} title={data.title} links={data.links} />
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            {bottomline.copyright}
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {bottomline.social.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-500 hover:text-gray-900 me-5"
              >
                {social.icon}
                <span className="sr-only">{social.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
