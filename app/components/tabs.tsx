"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Winners, Poster } from "../components";

interface TabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

interface tab {
  title: string;
  winners: { name: string; photo: string }[];
  poster: {
    url: string;
    desc: string;
  };
}

function Tab({ title, isActive, onClick }: TabProps) {
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

export default function Tabs({ tabs }: { tabs: tab[] }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(ind: number) {
    setActiveTab(ind);
  }

  return (
    <div className="max-container ">
      <div
        className="flex justify-center"
        // intial=
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="flex flex-col md:flex-row justify-center"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
        >
          {tabs[activeTab].winners.length > 0 ? (
            <>
              <div className="w-full md:w-1/2">
                <Winners winnerList={tabs[activeTab].winners} />
              </div>
              <div className="flex justify-center w-full md:w-1/2 items-center">
                <Poster posterurl={tabs[activeTab].poster.url} />
              </div>
            </>
          ) : (
            <div className="flex justify-center w-full md:w-1/2 items-center">
              <Poster posterurl={tabs[activeTab].poster.url} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
