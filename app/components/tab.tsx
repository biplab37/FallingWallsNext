import { motion } from "framer-motion";

interface TabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ title, isActive, onClick }: TabProps) {
  return (
    <button
      className={`relative px-4 md:px-10 py-2 mx-1 text-lg font-semibold focus:outline-none ${
        isActive ? " " : "text-gray-600"
      }`}
      onClick={onClick}
    >
      {isActive ? (
        <motion.div
          className="absolute inset-0 -z-10 bg-gray-300 rounded-lg"
          layoutId="tab"
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      ) : null}
      <span>{title}</span>
    </button>
  );
}
