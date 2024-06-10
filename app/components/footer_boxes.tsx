import Link from "next/link";

interface FooterBoxesProps {
  title: string;
  links: { href: string; label: string; icon?: any }[];
}

export default function FooterBoxes({ title, links }: FooterBoxesProps) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
        {title}
      </h2>
      <ul className="text-gray-500 font-medium">
        {links.map((link) => (
          <li key={link.href} className="mb-4">
            <Link href={link.href} className="hover:underline">
              {link.icon ? link.icon : null}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
